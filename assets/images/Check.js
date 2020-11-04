import React from "react";

function Icon({ length = 14 , color = "#FF6DA0"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={length}
      height={length}
      fill="none"
      viewBox="0 0 512 512"
    >
      <rect
        width="467"
        height="467"
        x="22.5"
        y="22.5"
        fill="#fff"
        stroke="#777777"
        strokeWidth="45"
        rx="63.5"
      ></rect>
      <path
        stroke="#777777"
        strokeWidth="45"
        d="M101.243 237.944L227.25 365.365"
      ></path>
      <path
        stroke="#777777"
        strokeWidth="45"
        d="M196.132 364.663L408.028 154.181"
      ></path>
    </svg>
  );
}

export default Icon;
