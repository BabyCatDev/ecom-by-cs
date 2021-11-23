import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Plus(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 28 28"
      {...props}
    >
      <G
        transform="translate(-3.5 -3.5)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path data-name="Line 19" transform="translate(18 5)" d="M0 0L0 25" />
        <Path data-name="Line 20" transform="translate(5 18)" d="M0 0L25 0" />
      </G>
    </Svg>
  );
}

export { Plus };
