import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Logout(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={38.081}
      height={38.081}
      viewBox="0 0 38.081 38.081"
      {...props}
    >
      <G
        transform="translate(-1.5 -1.5)"
        fill="none"
        stroke="#4d4a49"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path
          data-name="Path 13"
          d="M14.694 38.081H6.9a3.9 3.9 0 01-3.9-3.9V6.9A3.9 3.9 0 016.9 3h7.8"
        />
        <Path data-name="Path 14" d="M28.336 30.285l9.745-9.745-9.745-9.744" />
        <Path
          data-name="Line 13"
          transform="translate(14 20.081)"
          d="M24 0L0 0"
        />
      </G>
    </Svg>
  );
}

export { Logout };
