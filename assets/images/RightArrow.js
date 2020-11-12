import React from "react";

function Icon({ length }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={length}
      height={length}
      fill="none"
      viewBox="0 0 512 512"
    >
      <g clipPath="url(#clip0)">
        <path
          fill="#FF6DA0"
          d="M346.357 255.881L123.865 478.373c-7.692 7.693-7.692 20.165 0 27.858 7.694 7.691 20.165 7.691 27.858 0L388.144 269.81c7.691-7.693 7.691-20.165 0-27.858L151.723 5.53c-7.827-7.559-20.299-7.342-27.858.485-7.373 7.635-7.373 19.74 0 27.373l222.492 222.493z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H512V512H0z"
            transform="rotate(-180 256 256)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
