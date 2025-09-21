import * as React from "react";
import { SVGProps } from "react";
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}>
    <path
      stroke="#475BCA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5 3.5 8.201 3.5 14 8.201 24.5 14 24.5Z"
    />
    <path
      stroke="#475BCA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.125 13.125H14v6.125h.875"
    />
    <path
      fill="#475BCA"
      d="M13.781 10.5a1.313 1.313 0 1 0 0-2.625 1.313 1.313 0 0 0 0 2.625Z"
    />
  </svg>
);
export default InfoIcon;
