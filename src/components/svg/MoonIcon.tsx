import * as React from "react";
import { SVGProps } from "react";
const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}>
    <path
      stroke="#616161"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.927 11.926a7.19 7.19 0 0 1-8.853-8.853h0a7.189 7.189 0 1 0 8.853 8.852h0Z"
    />
  </svg>
);
export default MoonIcon;
