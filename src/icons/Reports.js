import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Reports(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={40}
      height={40}
      viewBox="0 0 48 48"
      {...props}
    >
      <G fill="none" stroke="#fff" strokeWidth={4} strokeLinejoin="round">
        <Path d="M5 7a3 3 0 013-3h24a3 3 0 013 3v37H8a3 3 0 01-3-3V7zM35 24a2 2 0 012-2h4a2 2 0 012 2v17a3 3 0 01-3 3h-5V24z" />
        <Path d="M11 12h8M11 19h12" strokeLinecap="round" />
      </G>
    </Svg>
  );
}

export { Reports };
