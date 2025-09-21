import * as React from "react";
import { SVGProps } from "react";
const ReservationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 11.875h5M7.5 9.375h5M12.5 3.125h3.125a.625.625 0 0 1 .625.625v13.125a.624.624 0 0 1-.625.625H4.375a.625.625 0 0 1-.625-.625V3.75a.625.625 0 0 1 .625-.625H7.5"
    />
    <path
      stroke="#616161"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625h-6.25Z"
    />
  </svg>
);
export default ReservationIcon;
