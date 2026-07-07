import { IconProps } from "core/types";

export const LampIcon = (props: IconProps) => {
  const { className, width, height, viewBox, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox ? viewBox : "0 0 18 18"}
      width={width ? width : "18px"}
      height={height ? height : "18px"}
      className={className ? className : ""}
      fill={"none"}
    >
      <path
        d="M8.6001 0.600098V1.4001M1.4001 8.6001H0.600098M3.4001 3.4001L2.92002 2.92002M13.8001 3.4001L14.2803 2.92002M16.6001 8.6001H15.8001M7.0001 9.8001H10.2001M8.6001 9.8001V13.8001M11.4001 12.4993C12.6114 11.6279 13.4001 10.2061 13.4001 8.6001C13.4001 5.94913 11.2511 3.8001 8.6001 3.8001C5.94913 3.8001 3.8001 5.94913 3.8001 8.6001C3.8001 10.2061 4.58884 11.6279 5.8001 12.4993V14.0401C5.8001 14.9362 5.8001 15.3842 5.97449 15.7265C6.12788 16.0275 6.37265 16.2723 6.67371 16.4257C7.01597 16.6001 7.46401 16.6001 8.3601 16.6001H8.8401C9.73618 16.6001 10.1842 16.6001 10.5265 16.4257C10.8275 16.2723 11.0723 16.0275 11.2257 15.7265C11.4001 15.3842 11.4001 14.9362 11.4001 14.0401V12.4993Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
