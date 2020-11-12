import React from "react";

function Icon({ length = 14 , color = "#FF6DA0"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={length}
      height={length}
      fill="none"
      viewBox="0 0 500 500"
    >
      <circle cx="250" cy="250" r="250" fill="#F778A1"></circle>
      <g clipPath="url(#clip0)">
        <path
          fill="#fff"
          d="M213.262 343.73l-56.705-56.705 137.15-137.149 56.704 56.704-137.149 137.15zm-62.005-46.716l52.016 52.016-77.987 25.971 25.971-77.987zm216.595-107.8l-9.835 9.836-56.78-56.78 9.836-9.835c9.907-9.913 25.973-9.913 35.881 0l20.898 20.898c9.836 9.941 9.836 25.944 0 35.881z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H250V250H0z"
            transform="translate(125 125)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;