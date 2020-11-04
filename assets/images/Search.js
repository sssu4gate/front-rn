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
      <g fill="#FF6DA0" clipPath="url(#clip0)">
        <path d="M225.474 0C101.151 0 0 101.151 0 225.474c0 124.33 101.151 225.474 225.474 225.474 124.33 0 225.474-101.144 225.474-225.474C450.948 101.151 349.804 0 225.474 0zm0 409.323c-101.373 0-183.848-82.475-183.848-183.848 0-101.373 82.475-183.849 183.848-183.849 101.373 0 183.848 82.475 183.848 183.848 0 101.373-82.475 183.849-183.848 183.849z"></path>
        <path d="M505.904 476.468L386.575 357.14c-8.131-8.131-21.299-8.131-29.43 0-8.131 8.124-8.131 21.306 0 29.43l119.329 119.328a20.74 20.74 0 0014.715 6.098 20.754 20.754 0 0014.715-6.098c8.131-8.124 8.131-21.306 0-29.43z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H512V512H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
