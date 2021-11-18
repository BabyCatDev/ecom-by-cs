import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Stats(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={41}
      viewBox="0 0 31 41"
      {...props}
    >
      <G
        transform="translate(-4.5 -2.27)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path
          data-name="Line 6"
          transform="translate(34 17.77)"
          d="M0 24L0 0"
        />
        <Path data-name="Line 7" transform="translate(20 3.77)" d="M0 38L0 0" />
        <Path data-name="Line 8" transform="translate(6 27.77)" d="M0 14L0 0" />
      </G>
    </Svg>
  );
}

export { Stats };
