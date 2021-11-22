import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Minus(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 28 28"
      {...props}
    >
      <G
        transform="translate(-3.5 -3.5)"
        fill="none"
        stroke="#F66C16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path data-name="Line 20" transform="translate(5 18)" d="M0 0L25 0" />
      </G>
    </Svg>
  );
}

export { Minus };
