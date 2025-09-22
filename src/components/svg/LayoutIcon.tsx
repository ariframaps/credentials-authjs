import * as React from "react";
import { SVGProps } from "react";
const LayoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="none"
    {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 3.75h-5v5h5v-5ZM16.25 3.75h-5v5h5v-5ZM8.75 11.25h-5v5h5v-5ZM16.25 11.25h-5v5h5v-5Z"
    />
  </svg>
);
export default LayoutIcon;
