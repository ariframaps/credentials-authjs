import * as React from "react";
import { SVGProps } from "react";
const BedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="none"
    {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.125 13.125V6.25h8.125a2.5 2.5 0 0 1 2.5 2.5v4.375M1.25 16.25V3.75M1.25 13.125h17.5v3.125M8.125 6.25H1.25"
    />
  </svg>
);
export default BedIcon;
