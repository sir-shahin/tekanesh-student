import { IconProps } from "core/types";

export const HomeworkIcons = (props: IconProps) => {
  const { className, width, height, viewBox, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox ? viewBox : "0 0 16 18"}
      width={width ? width : "16px"}
      height={height ? height : "18px"}
      className={className ? className : ""}
      fill={"none"}
    >
      <path
        d="M15 4.70833V12.625C15 15 13.8125 16.5833 11.0417 16.5833H4.70833C1.9375 16.5833 0.75 15 0.75 12.625V4.70833C0.75 2.33333 1.9375 0.75 4.70833 0.75H11.0417C13.8125 0.75 15 2.33333 15 4.70833Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.85413 2.72919V4.31252C9.85413 5.18335 10.5666 5.89585 11.4375 5.89585H13.0208"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.70837 9.45837H7.87504"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.70837 12.625H11.0417"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
