import { IconProps } from "core/types";

export const MonitorIcons = (props: IconProps) => {
  const { className, width, height, viewBox, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox ? viewBox : "0 0 17 17"}
      width={width ? width : "17px"}
      height={height ? height : "17px"}
      className={className ? className : ""}
      fill={"none"}
    >
      <path
        d="M4.1725 0.75H12.7365C15.4806 0.75 16.1667 1.43604 16.1667 4.1725V9.05188C16.1667 11.796 15.4806 12.4744 12.7442 12.4744H4.1725C1.43604 12.4821 0.75 11.796 0.75 9.05958V4.1725C0.75 1.43604 1.43604 0.75 4.1725 0.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.45837 12.4821V16.1666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 9.22913H16.1667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.98962 16.1666H11.9271"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
