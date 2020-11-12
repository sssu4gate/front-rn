import React from "react";

function Icon({ length = 1, color = "#EEEEEE" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={length}
      height={length * 20}
      fill={color}
      viewBox="0 0 1 20"
    >
      <path stroke="#EEE" d="M0.5 0L0.5 20"></path>
    </svg>
  );
}

export default Icon;
