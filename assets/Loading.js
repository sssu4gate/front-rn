import React, { Component } from "react";
import { Animated, Easing, View } from "react-native";
import Svg, { SvgProps, Rect, Line } from "react-native-svg";

export default class Loading extends Component {
  state = {
    rotateAnim: new Animated.Value(0),
  };

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.state.rotateAnim.setValue(0);
    Animated.timing(this.state.rotateAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      this.startAnimation();
    });
  }

  render() {
    return (
      <View style={{ width: 100, height: 100 }}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: this.state.rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            },
          ]}
        >
          <SvgComponent />
        </Animated.View>
      </View>
    );
  }
}

function SvgComponent(props) {
  return (
    <Svg
      style={{
        margin: "auto",
        background: "#fff",
      }}
      width={100}
      height={100}
      viewBox="0 0 100 100"
      display="block"
      {...props}
    >
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        fillOpacity={1}
      />
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        transform="rotate(45 50 50)"
        fillOpacity={0.875}
      />
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        transform="rotate(90 50 50)"
        fillOpacity={0.75}
      />
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        transform="rotate(135 50 50)"
        fillOpacity={0.625}
      />
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        transform="rotate(180 50 50)"
        fillOpacity={0.5}
      />
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        transform="rotate(225 50 50)"
        fillOpacity={0.375}
      />
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        transform="rotate(270 50 50)"
        fillOpacity={0.25}
      />
      <Rect
        x={48}
        y={31.5}
        rx={2}
        ry={2.47}
        width={4}
        height={13}
        fill="#aaa"
        transform="rotate(315 50 50)"
        fillOpacity={0.125}
      />
    </Svg>
  );
}
