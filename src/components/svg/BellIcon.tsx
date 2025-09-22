import * as React from "react";
import { SVGProps } from "react";
const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="none"
    {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 21h6M5.269 9.75A6.74 6.74 0 0 1 12.051 3c3.712.028 6.68 3.113 6.68 6.835v.665c0 3.358.703 5.306 1.322 6.371A.75.75 0 0 1 19.408 18H4.592a.749.749 0 0 1-.645-1.13c.62-1.064 1.322-3.013 1.322-6.37v-.75Z"
    />
  </svg>
);
export default BellIcon;
