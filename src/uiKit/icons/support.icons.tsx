import { IconProps } from "core/types";

export const SupportIcons = (props: IconProps) => {
  const { className, width, height, viewBox, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox ? viewBox : "0 0 19 19"}
      width={width ? width : "19px"}
      height={height ? height : "19px"}
      className={className ? className : ""}
      fill={"none"}
    >
      <path
        d="M15.8334 9.65825V11.0041C15.8334 13.4979 14.4084 14.5666 12.2709 14.5666H5.14587C3.00837 14.5666 1.58337 13.4979 1.58337 11.0041V6.72913C1.58337 4.23538 3.00837 3.16663 5.14587 3.16663H7.28337C7.18046 3.46746 7.12504 3.79996 7.12504 4.15621V7.24373C7.12504 8.01165 7.37837 8.6608 7.82962 9.11205C8.28087 9.5633 8.93004 9.81664 9.69796 9.81664V10.9171C9.69796 11.3208 10.1571 11.5662 10.4975 11.3445L12.7855 9.81664H14.8438C15.2 9.81664 15.5325 9.76117 15.8334 9.65825Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4167 4.15629V7.24381C17.4167 8.42339 16.815 9.31 15.8333 9.65834C15.5325 9.76125 15.2 9.81673 14.8437 9.81673H12.7854L10.4975 11.3446C10.1571 11.5663 9.69792 11.3209 9.69792 10.9172V9.81673C8.93 9.81673 8.28083 9.56338 7.82958 9.11213C7.37833 8.66088 7.125 8.01173 7.125 7.24381V4.15629C7.125 3.80004 7.18042 3.46754 7.28333 3.16671C7.63167 2.18504 8.51833 1.58337 9.69792 1.58337H14.8437C16.3875 1.58337 17.4167 2.61254 17.4167 4.15629Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.85828 17.4166H11.5583"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.70837 14.5667V17.4167"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6423 5.73958H14.6494"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4257 5.73958H12.4328"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2089 5.73958H10.216"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
