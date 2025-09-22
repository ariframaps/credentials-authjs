import * as React from "react";
import { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // stroke="currentColor"
    // fill="currentColor"
    {...props}>
    <path
      fill="#9E9E9E"
      fillRule="evenodd"
      d="M9.063 3.125a5.938 5.938 0 1 0 0 11.875 5.938 5.938 0 0 0 0-11.875ZM1.875 9.063a7.187 7.187 0 1 1 14.375 0 7.187 7.187 0 0 1-14.375 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#9E9E9E"
      fillRule="evenodd"
      d="M13.26 13.261a.625.625 0 0 1 .885 0l3.797 3.797a.625.625 0 1 1-.884.884l-3.797-3.797a.625.625 0 0 1 0-.884Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SearchIcon;
