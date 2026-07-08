import { create } from "zustand";

import { getUser } from "core/services";
import { UsersDataTypes } from "core/types";

interface Props {
    fetching: boolean;
    hasError: boolean;
    userData: UsersDataTypes | null;
    name: string;
    chatId: string;
    setName: (newName: string) => void;
    setChatId: (chatId: string) => void;
    fetchUserData: () => Promise<void>;
}

export const useUsersStore = create<Props>((set) => ({
    userData: null,
    fetching: false,
    hasError: false,
    fetchUserData: async () => {
        set({ fetching: true, hasError: false });
        try {
            const response = await getUser();
            set({
                userData: response.data,
                fetching: false,
            });
        } catch (error) {
            console.error(error)
            set({ hasError: true, fetching: false });
        }
    },
    name: "",
    setName: (newName) => set({ name: newName }),

    chatId: "",
    setChatId: (chat_id) => set({ chatId: chat_id }),
}));
