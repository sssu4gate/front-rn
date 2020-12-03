import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496" {...props}>
      <Circle cx={248} cy={24} r={24} fill="#383a39" />
      <Circle cx={248} cy={472} r={24} fill="#eceeee" />
      <Circle cx={136} cy={53.6} r={24} fill="#77807f" />
      <Path
        d="M380.8 430.4c6.4 11.2 2.4 25.6-8.8 32.8-11.2 6.4-25.6 2.4-32.8-8.8-6.4-11.2-2.4-25.6 8.8-32.8 11.2-6.4 26.4-2.4 32.8 8.8z"
        fill="#f2f4f4"
      />
      <Path
        d="M65.6 115.2c11.2 6.4 15.2 20.8 8.8 32.8-6.4 11.2-20.8 15.2-32.8 8.8-11.2-6.4-15.2-20.8-8.8-32.8s21.6-15.2 32.8-8.8z"
        fill="#9faaa9"
      />
      <Path
        d="M454.4 339.2c11.2 6.4 15.2 20.8 8.8 32.8-6.4 11.2-20.8 15.2-32.8 8.8-11.2-6.4-15.2-20.8-8.8-32.8 6.4-11.2 20.8-15.2 32.8-8.8z"
        fill="#f2f7f7"
      />
      <Circle cx={24} cy={248} r={24} fill="#b2bbba" />
      <Circle cx={472} cy={248} r={24} fill="#fff" />
      <Path
        d="M41.6 339.2c11.2-6.4 25.6-2.4 32.8 8.8 6.4 11.2 2.4 25.6-8.8 32.8-11.2 6.4-25.6 2.4-32.8-8.8s-2.4-25.6 8.8-32.8z"
        fill="#c5cccb"
      />
      <Path d="M430.4 115.2c11.2-6.4 25.6-2.4 32.8 8.8 6.4 11.2 2.4 25.6-8.8 32.8-11.2 6.4-25.6 2.4-32.8-8.8-6.4-11.2-2.4-26.4 8.8-32.8z" />
      <Path
        d="M115.2 430.4c6.4-11.2 20.8-15.2 32.8-8.8 11.2 6.4 15.2 20.8 8.8 32.8-6.4 11.2-20.8 15.2-32.8 8.8-11.2-7.2-15.2-21.6-8.8-32.8z"
        fill="#d9dddd"
      />
      <Path
        d="M339.2 41.6c6.4-11.2 20.8-15.2 32.8-8.8 11.2 6.4 15.2 20.8 8.8 32.8-6.4 11.2-20.8 15.2-32.8 8.8-11.2-6.4-15.2-20.8-8.8-32.8z"
        fill="#111"
      />
    </Svg>
  );
}

export default SvgComponent;
