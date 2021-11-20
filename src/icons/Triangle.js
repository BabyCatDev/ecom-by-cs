import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Triangle(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={12}
      viewBox="0 0 21 15"
      {...props}
    >
      <Path
        data-name="Polygon 1"
        d="M10.5 0L21 15H0z"
        transform="rotate(180 10.5 7.5)"
        fill="#707070"
      />
    </Svg>
  );
}

export { Triangle };
