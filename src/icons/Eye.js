import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

function Eye(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}
    >
      <G
        data-name="Group 12"
        transform="translate(2.188 4.583)"
        fill="none"
        stroke="#4E4B4B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Path 14"
          d="M17.298 5.465a1.552 1.552 0 010 1.9c-1.369 1.787-4.652 5.465-8.486 5.465S1.695 9.151.326 7.365a1.551 1.551 0 010-1.9C1.695 3.679 4.978 0 8.813 0s7.116 3.679 8.485 5.465z"
        />
        <Circle
          data-name="Ellipse 5"
          cx={3}
          cy={3}
          r={3}
          transform="translate(5.812 3.417)"
        />
      </G>
      <Path data-name="Rectangle 41" fill="rgba(0,0,0,0)" d="M0 0h22v22H0z" />
    </Svg>
  );
}

export { Eye };
