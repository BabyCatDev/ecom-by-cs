import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function ArrowDown(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-down-circle"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M8 12L12 16 16 12" />
      <Path d="M12 8L12 16" />
    </Svg>
  );
}

export { ArrowDown };
