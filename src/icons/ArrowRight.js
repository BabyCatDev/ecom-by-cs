import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function ArrowRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20.828}
      viewBox="0 0 24 24.828"
      {...props}
    >
      <G
        data-name="arrow-right(1)"
        transform="translate(-4 -3.586)"
        fill="none"
        stroke="#383636"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path data-name="Line 14" transform="translate(5 16)" d="M0 0L22 0" />
        <Path data-name="Path 15" d="M16 5l11 11-11 11" />
      </G>
    </Svg>
  );
}

export { ArrowRight };
