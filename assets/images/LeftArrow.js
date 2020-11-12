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
      <path
        fill="#FF6DA0"
        d="M165.643 256.119L388.135 33.627c7.691-7.693 7.691-20.165 0-27.858-7.694-7.69-20.165-7.69-27.858 0L123.856 242.19c-7.691 7.693-7.691 20.165 0 27.858L360.277 506.47c7.826 7.559 20.299 7.342 27.858-.485 7.373-7.636 7.373-19.739 0-27.373L165.643 256.119z"
      ></path>
    </svg>
  );
}

export default Icon;
