import React from "react";

function Icon({ length = 14 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={length}
      height={length}
      fill="none"
      viewBox="0 0 512 512"
    >
      <rect
        width="511"
        height="511"
        x="0.5"
        y="0.5"
        fill="#FF6DA0"
        stroke="#FF6DA0"
        rx="85.5"
      ></rect>
      <path
        stroke="#fff"
        strokeWidth="45"
        d="M101.243 237.944L227.25 365.365"
      ></path>
      <path
        stroke="#fff"
        strokeWidth="45"
        d="M196.132 364.663L408.028 154.181"
      ></path>
    </svg>
  );
}

export default Icon;
