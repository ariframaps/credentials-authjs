import * as React from "react";
import { SVGProps } from "react";
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="none"
    {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.345 14.901 3.94 2.496c.504.32 1.129-.155.98-.743l-1.139-4.478a.683.683 0 0 1 .222-.694l3.533-2.94c.464-.387.225-1.158-.372-1.196l-4.614-.3a.658.658 0 0 1-.566-.418l-1.721-4.334a.65.65 0 0 0-1.216 0l-1.72 4.334a.658.658 0 0 1-.567.418l-4.614.3c-.597.038-.836.809-.372 1.195l3.533 2.941a.684.684 0 0 1 .222.694l-1.056 4.153c-.18.705.571 1.275 1.176.892l3.661-2.32a.641.641 0 0 1 .69 0v0Z"
    />
  </svg>
);
export default StarIcon;
