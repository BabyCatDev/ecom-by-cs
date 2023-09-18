import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function ArrowLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={39}
      height={40.211}
      viewBox="0 0 39 40.211"
      {...props}
    >
      <G
        transform="translate(1.5 2.121)"
        fill="none"
        stroke="#4d4a49"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path data-name="Line 15" transform="translate(0 18)" d="M36 0L0 0" />
        <Path data-name="Path 16" d="M17.984 35.968L0 17.984 17.984 0" />
      </G>
    </Svg>
  );
}

export { ArrowLeft };
