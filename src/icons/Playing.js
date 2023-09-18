import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function Playing(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F66C16"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-play-circle"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M10 8L16 12 10 16 10 8z" />
    </Svg>
  );
}

export { Playing };
