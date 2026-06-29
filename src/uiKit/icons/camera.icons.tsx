import { IconProps } from "core/types";

export const CameraIcon = (props: IconProps) => {
  const { className, width, height, viewBox, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox ? viewBox : "0 0 17 17"}
      width={width ? width : "17px"}
      height={height ? height : "17px"}
      className={className ? className : ""}
      fill="none"
    >
      <path
        d="M8.62279 14.0524H4.27354C2.09892 14.0524 1.37634 12.6073 1.37634 11.1552V5.36082C1.37634 3.1862 2.09892 2.46362 4.27354 2.46362H8.62279C10.7974 2.46362 11.52 3.1862 11.52 5.36082V11.1552C11.52 13.3298 10.7905 14.0524 8.62279 14.0524Z"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4331 11.7678L11.52 10.4258V6.08348L13.4331 4.74154C14.369 4.08778 15.1397 4.48692 15.1397 5.63617V10.88C15.1397 12.0293 14.369 12.4284 13.4331 11.7678Z"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.91397 7.56989C8.48407 7.56989 8.94623 7.10773 8.94623 6.53763C8.94623 5.96753 8.48407 5.50537 7.91397 5.50537C7.34387 5.50537 6.88171 5.96753 6.88171 6.53763C6.88171 7.10773 7.34387 7.56989 7.91397 7.56989Z"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
