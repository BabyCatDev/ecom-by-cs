import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function Info(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#787878"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-info"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 16L12 12" />
      <Path d="M12 8L12.01 8" />
    </Svg>
  );
}

export { Info };
