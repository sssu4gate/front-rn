import React from "react";

function Icon({ length = 14 , color = "#FF6DA0"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={length}
      height={length}
      fill="none"
      viewBox="0 0 404 404"
    >
      <g clipPath="url(#clip0)">
        <path
          fill="#000"
          d="M335.348 0h-266.9c-5.511 0-9.986 4.47-9.986 9.987v374.025a19.973 19.973 0 0010.841 17.785 19.964 19.964 0 0020.77-1.549l111.826-80.162 111.83 80.158a19.967 19.967 0 0020.761 1.537 19.982 19.982 0 0010.849-17.769V9.987c0-5.516-4.475-9.987-9.991-9.987zm-9.986 384.008L207.723 299.68a9.988 9.988 0 00-11.637 0L78.443 384.012V19.973h246.919v364.035z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H404V404H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;