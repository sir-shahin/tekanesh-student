import { IconProps } from "core/types";

export const NoteDollarIcon = (props: IconProps) => {
  const { className, width = 21, height = 20, viewBox, color } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox ? viewBox : "0 0 22 20"}
      fill="none"
      className={className ? className : ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.850098 8.18846C0.850098 7.11788 1.65599 6.25 2.6501 6.25H18.8501C19.8442 6.25 20.6501 7.11788 20.6501 8.18846V16.9115C20.6501 17.9821 19.8442 18.85 18.8501 18.85H2.6501C1.65598 18.85 0.850098 17.9821 0.850098 16.9115V8.18846Z"
        stroke={color}
        strokeWidth="1.7"
      />
      <path
        d="M19.75 9.3999H19.3C18.0574 9.3999 17.05 8.39254 17.05 7.1499"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M19.75 15.7002H19.3C18.0574 15.7002 17.05 16.7076 17.05 17.9502"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M1.75 9.3999H2.2C3.44264 9.3999 4.45 8.39254 4.45 7.1499"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M1.75 15.7002H2.2C3.44264 15.7002 4.45 16.7076 4.45 17.9502"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12.7751 12.5499C12.7751 13.6683 11.8685 14.5749 10.7501 14.5749C9.63172 14.5749 8.7251 13.6683 8.7251 12.5499C8.7251 11.4315 9.63172 10.5249 10.7501 10.5249C11.8685 10.5249 12.7751 11.4315 12.7751 12.5499Z"
        stroke={color}
        strokeWidth="1.7"
      />
      <path
        d="M2.65015 3.55029H18.8501"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4.4502 0.850098H17.0502"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
};
