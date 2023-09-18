import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Checked(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0AB31F"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-circle"
      {...props}
    >
      <Path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <Path d="M22 4L12 14.01 9 11.01" />
    </Svg>
  );
}

export { Checked };
