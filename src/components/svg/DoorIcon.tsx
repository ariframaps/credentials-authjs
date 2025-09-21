import * as React from "react";
import { SVGProps } from "react";
const DoorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.875 17.5h16.25M4.375 17.5V3.125A.625.625 0 0 1 5 2.5h10a.625.625 0 0 1 .625.625V17.5"
    />
    <path
      fill="#616161"
      stroke="#616161"
      strokeWidth={1.5}
      d="M12.188 9.969a.031.031 0 1 1 0 .062.031.031 0 0 1 0-.062Z"
    />
  </svg>
);
export default DoorIcon;
