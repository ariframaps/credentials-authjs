import * as React from "react";
import { SVGProps } from "react";
const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="none"
    {...props}>
    <path d="M16.25 2.5h-2.5V1.25H12.5V2.5h-5V1.25H6.25V2.5h-2.5c-.688 0-1.25.563-1.25 1.25v12.5c0 .688.563 1.25 1.25 1.25h12.5c.688 0 1.25-.563 1.25-1.25V3.75c0-.688-.563-1.25-1.25-1.25Zm0 13.75H3.75V7.5h12.5v8.75Zm0-10H3.75v-2.5h2.5V5H7.5V3.75h5V5h1.25V3.75h2.5v2.5Z" />
  </svg>
);
export default CalendarIcon;
