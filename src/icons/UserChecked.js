import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function UserChecked(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={52}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-user-check"
      {...props}
    >
      <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <Circle cx={8.5} cy={7} r={4} />
      <Path d="M17 11L19 13 23 9" />
    </Svg>
  );
}

export { UserChecked };
