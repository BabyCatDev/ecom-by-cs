import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

function Users(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={46.332}
      height={38.523}
      viewBox="0 0 46.332 38.523"
      {...props}
    >
      <G
        data-name="users(1)"
        transform="translate(.5 -1.431)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path
          data-name="Path 6"
          d="M32.514 38.454v-3.939a7.879 7.879 0 00-7.878-7.879H8.879A7.879 7.879 0 001 34.515v3.939"
        />
        <Circle
          data-name="Ellipse 6"
          cx={8}
          cy={8}
          r={8}
          transform="translate(9 3)"
        />
        <Path
          data-name="Path 7"
          d="M44.332 38.454v-3.939a7.879 7.879 0 00-5.909-7.623"
        />
        <Path data-name="Path 8" d="M30.545 3.256a7.879 7.879 0 010 15.265" />
      </G>
    </Svg>
  );
}

export { Users };
