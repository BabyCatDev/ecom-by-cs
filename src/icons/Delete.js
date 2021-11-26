import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Delete(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.828}
      height={14.828}
      viewBox="0 0 14.828 14.828"
      {...props}
    >
      <G
        transform="translate(-4.586 -4.586) translate(6 6)"
        fill="none"
        stroke="#f12626"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path data-name="Line 17" d="M12 0L0 12" />
        <Path data-name="Line 18" d="M0 0L12 12" />
      </G>
    </Svg>
  );
}

export { Delete };
