import * as React from "react";
import { SVGProps } from "react";
const EyeClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}>
    <path
      stroke="#9E9E9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 4.374C3.75 4.374 1.25 10 1.25 10s2.5 5.624 8.75 5.624S18.75 10 18.75 10 16.25 4.374 10 4.374Z"
    />
    <path
      stroke="#9E9E9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 13.125a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
    />
    <path stroke="#9E9E9E" strokeWidth={2} d="m16.708 3.706-13 13.036" />
  </svg>
);
export default EyeClose;
