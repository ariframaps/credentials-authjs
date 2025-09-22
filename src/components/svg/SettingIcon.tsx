import * as React from "react";
import { SVGProps } from "react";
const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="none"
    {...props}>
    <path
      // stroke="#616161"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 13.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />
    <path
      // stroke="#616161"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.422 6.3c.185.272.35.557.492.853L17.94 8.28a8.117 8.117 0 0 1 .002 3.441l-2.028 1.126a6.56 6.56 0 0 1-.492.852l.039 2.318a8.118 8.118 0 0 1-2.98 1.723l-1.99-1.193a6.552 6.552 0 0 1-.983-.001l-1.988 1.193a8.116 8.116 0 0 1-2.982-1.719l.039-2.32a6.557 6.557 0 0 1-.491-.852L2.06 11.722a8.117 8.117 0 0 1-.003-3.442l2.028-1.126c.143-.296.308-.58.493-.851l-.04-2.319a8.116 8.116 0 0 1 2.98-1.723l1.99 1.194c.327-.025.656-.024.983 0l1.989-1.192a8.116 8.116 0 0 1 2.982 1.719l-.04 2.319Z"
    />
  </svg>
);
export default SettingIcon;
