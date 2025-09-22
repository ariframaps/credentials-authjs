import * as React from "react";
import { SVGProps } from "react";
const EyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#9E9E9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 4.375C3.75 4.375 1.25 10 1.25 10s2.5 5.624 8.75 5.624S18.75 10 18.75 10 16.25 4.375 10 4.375Z"
    />
    <path
      stroke="#9E9E9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 13.126a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
    />
  </svg>
);
export default EyeOpen;
