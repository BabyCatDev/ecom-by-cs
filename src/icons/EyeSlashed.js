import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function EyeSlashed(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}
    >
      <G
        data-name="Group 41"
        fill="none"
        stroke="#4E4B4B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Path 180"
          d="M6.425 15.576a18.938 18.938 0 01-3.861-3.823 1.583 1.583 0 010-1.942c1.395-1.822 4.744-5.573 8.653-5.573a8.415 8.415 0 014.8 1.752"
        />
        <Path
          data-name="Path 181"
          d="M13.212 8.807a2.807 2.807 0 10-3.97 3.97"
        />
        <Path data-name="Path 182" d="M3.739 18.26L18.696 3.303" />
        <Path
          data-name="Path 183"
          d="M9.348 17.049a6.66 6.66 0 001.87.277c3.909 0 7.258-3.751 8.654-5.573a1.584 1.584 0 000-1.943 21.444 21.444 0 00-1.578-1.833"
        />
      </G>
    </Svg>
  );
}

export { EyeSlashed };
