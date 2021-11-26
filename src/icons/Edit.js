import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Edit(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.311}
      height={22.121}
      viewBox="0 0 22.311 22.121"
      {...props}
    >
      <G
        fill="none"
        stroke="#4d4a49"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Path 17"
          d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
          transform="translate(-1 -.879)"
        />
        <Path
          data-name="Path 18"
          d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z"
          transform="translate(-1 -.879)"
        />
      </G>
    </Svg>
  );
}

export { Edit };
