import * as React from "react";
import { SVGProps } from "react";
const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#1CB78D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 13.25 1.5 7 7.75.75"
    />
  </svg>
);
export default LeftArrow;
