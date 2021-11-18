import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Bag(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={42.886}
      height={48.428}
      viewBox="0 0 42.886 48.428"
      {...props}
    >
      <G
        transform="translate(-1.5 -.5)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          data-name="Path 4"
          d="M9.648 2L3 11.086v31.8a4.488 4.488 0 004.432 4.543h31.022a4.488 4.488 0 004.432-4.543v-31.8L36.238 2z"
          strokeWidth={3}
        />
        <Path
          data-name="Line 5"
          transform="translate(3 11)"
          strokeWidth={2}
          d="M0 0L40 0"
        />
        <Path
          data-name="Path 5"
          d="M32.031 20.171a9.086 9.086 0 01-18.171 0"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
}

export { Bag };
