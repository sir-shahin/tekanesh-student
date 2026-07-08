

interface MessageHandler {
    [key: string]: (message: SocketData) => void;
}

interface MessageHandlers {
    message: MessageHandler;
    event: MessageHandler;
    error: MessageHandler;
}

interface EventListeners {
    open: Array<(event: Event) => void>;
    close: Array<(event: CloseEvent) => void>;
    error: Array<(event: Event) => void>;
    reconnect: Array<(info: { attempt: number; maxAttempts: number }) => void>;
}

type MessageData = {
    action?: string;
    data: unknown;
    message_type?: string;
    status: boolean;
    status_code: number;
    type: "message";
    extra?: unknown;
};

type EventData = {
    action?: string;
    data: unknown;
    event_type?: string;
    status: boolean;
    status_code: number;
    type: "event";
    extra?: unknown;
};

type ErrorData = {
    detail: unknown;
    error_type?: string;
    status: boolean;
    status_code: number;
    type: "error";
    extra?: unknown;
};

type SocketData = MessageData | EventData | ErrorData;


export default class WebSocketManager {
    private endpoint: string;
    private socket: WebSocket | null = null;
    private eventListeners: EventListeners;
    private messageHandlers: MessageHandlers;
    public reconnectAttempts = 0;
    public maxReconnectAttempts = 5;
    public reconnectInterval = 3000;
    public autoReconnect = true;

    constructor(endpoint: string) {
        if (!endpoint) {
            throw new Error('Endpoint is required');
        }

        this.endpoint = endpoint;

        this.eventListeners = {
            open: [],
            close: [],
            error: [],
            reconnect: []
        };

        this.messageHandlers = {
            message: {},
            event: {},
            error: {}
        };
    }


    is_connected() {
        return this.socket && this.socket.readyState === WebSocket.OPEN
    }

    connect() {

        if (this.is_connected()) {
            console.warn('WebSocket is already connected');
            return this.socket;
        }

        this.socket = new WebSocket(this.endpoint);

        this.socket.onopen = (event: Event) => {
            this.reconnectAttempts = 0;
            this._triggerEvent('open', event);
        };

        this.socket.onmessage = (event: MessageEvent) => {
            this._handleMessage(event);
        };


        this.socket.onclose = (event: CloseEvent) => {
            console.log('WebSocket disconnected', event);
            this._triggerEvent('close', event);

            if (this.autoReconnect) {
                this._attemptReconnect();
            }
        };

        this.socket.onerror = (error: Event) => {
            console.error('WebSocket error', error);
            this._triggerEvent('error', error);
        };
        return this.socket
    }

    disconnect() {
        this.autoReconnect = false;
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }


    send(data: unknown, force_to_connect = true): boolean {
        if (!this.socket) {
            console.error('Socket is dead');
            return false;
        }

        if (this.socket.readyState !== WebSocket.OPEN) {
            if (force_to_connect) {
                this.connect()
            } else {
                console.error('WebSocket is not connected');
                return false;
            }
        }

        try {
            const jsonData = JSON.stringify(data);
            this.socket.send(jsonData);
            return true;
        } catch (error) {
            console.error('Error sending message:', error);
            return false;
        }
    }



    addEventListener(event: keyof EventListeners, listener: (event: Event) => void) {
        if (!this.eventListeners[event]) {
            console.warn(`Invalid event type: ${event}`);
            return;
        }

        this.eventListeners[event].push(listener);
    }


    removeEventListener(event: keyof EventListeners, listener: (event: Event) => void) {
        if (!this.eventListeners[event]) {
            console.warn(`Invalid event type: ${event}`);
            return;
        }

        this.eventListeners[event] = this.eventListeners[event].filter(
            l => l !== listener
        );
    }

    on<T extends keyof MessageHandlers>(
        messageType: T,
        action: string,
        handler: (message: Extract<SocketData, { type: T }>) => void
    ): void;

    on<T extends keyof MessageHandlers>(
        messageType: T,
        handler: (message: Extract<SocketData, { type: T }>) => void
    ): void;

    on(
        messageType: keyof MessageHandlers,
        actionOrHandler?: string | ((message: SocketData) => void),
        handler?: (message: SocketData) => void
    ): void {
        if (!this.messageHandlers[messageType]) {
            console.error(`Invalid message type: ${messageType}`);
            return;
        }

        if (typeof actionOrHandler === 'string' && typeof handler === 'function') {
            this.messageHandlers[messageType][actionOrHandler] = handler;
        }

        else if (typeof actionOrHandler === 'function' && handler === undefined) {
            this.messageHandlers[messageType]['default'] = actionOrHandler;
        }

        else if (actionOrHandler === undefined && typeof handler === 'function') {
            this.messageHandlers[messageType]['default'] = handler;
        }
        else {
            console.error('Invalid parameters passed to `on` method.');
        }
    }

    private _handleMessage(event: MessageEvent): void {
        try {
            const message: SocketData = JSON.parse(event.data);
            const { type } = message;

            let msgType: string | undefined;
            switch (type) {
                case "message": {
                    const messageData = message as MessageData;
                    msgType = messageData.message_type;
                    if (msgType === "data") {
                        msgType = messageData.action;
                    }
                    break;
                }
                case "event": {
                    const eventData = message as EventData;
                    msgType = eventData.event_type;
                    break;
                }
                case "error": {
                    const errorData = message as ErrorData;
                    msgType = errorData.error_type;
                    break;
                }
            }

            const handler =
                (msgType && this.messageHandlers[type][msgType]) ||
                this.messageHandlers[type]["default"];

            if (handler && typeof handler === "function") {
                handler(message);
            }
        } catch (error) {
            console.error('Error parsing WebSocket message:', error);
        }
    }





    private _attemptReconnect(): void {
        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            console.error('Max reconnection attempts reached');
            return;
        }

        this.reconnectAttempts++;
        console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts}) - waiting for ${(this.reconnectInterval * (this.reconnectAttempts)) / 1000} seconds    ...`);
        this._triggerEvent('reconnect', {
            attempt: this.reconnectAttempts,
            maxAttempts: this.maxReconnectAttempts
        });

        setTimeout(() => {
            this.connect();
        }, this.reconnectInterval * (this.reconnectAttempts));
    }



    private _triggerEvent(event: keyof EventListeners, data: unknown): void {
        if (this.eventListeners[event]) {
            this.eventListeners[event].forEach((listener) => {
                try {
                    listener(data as Event);
                } catch (error) {
                    console.error(`Error in ${event} event listener:`, error);
                }
            });
        }
    }


}

