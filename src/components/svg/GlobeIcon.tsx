import * as React from "react";
import { SVGProps } from "react";
const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.513 9h16.974M3.513 15h16.975"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20.759c2.071 0 3.75-3.922 3.75-8.759S14.071 3.242 12 3.242c-2.071 0-3.75 3.921-3.75 8.758S9.929 20.76 12 20.76Z"
    />
  </svg>
);
export default GlobeIcon;
