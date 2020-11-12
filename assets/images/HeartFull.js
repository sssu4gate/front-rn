import React from "react";

export default function HeartFull({ length = 16 , color = "#FF6DA0"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={length}
      height={length}
      fill="none"
      viewBox="0 0 512 440"
    >
      <path
        fill="#FF6DA0"
        d="M475.714 36.004C451.521 12.38 418.096.574 375.425.574c-11.808 0-23.86 2.047-36.143 6.14-12.288 4.096-23.719 9.622-34.281 16.574-10.576 6.95-19.665 13.477-27.289 19.57A263.96 263.96 0 00256 62.287a264.316 264.316 0 00-21.714-19.428c-7.621-6.094-16.714-12.617-27.288-19.57-10.572-6.956-22.001-12.478-34.286-16.575-12.284-4.092-24.334-6.14-36.142-6.14-42.668 0-76.095 11.81-100.284 35.43C12.095 59.621 0 92.382 0 134.286c0 12.762 2.242 25.908 6.716 39.427 4.474 13.524 9.573 25.049 15.286 34.571 5.712 9.521 12.19 18.81 19.428 27.857 7.239 9.049 12.528 15.281 15.858 18.713 3.332 3.424 5.952 5.903 7.857 7.424L243.428 434.28c3.429 3.431 7.619 5.147 12.571 5.147s9.145-1.716 12.572-5.14l178-171.432c43.62-43.615 65.428-86.473 65.428-128.569.001-41.904-12.097-74.664-36.285-98.282z"
      ></path>
    </svg>
  );
}
