import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Truck(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={60}
      height={60}
      viewBox="0 0 36 36"
      {...props}
    >
      <Path
        className="clr-i-outline clr-i-outline-path-1"
        d="M30 12h-4V7a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h1V8h20v11.7a6.45 6.45 0 011.56-.2H26V14h4a2 2 0 012 2v1h-4v2h4v5h-2.4a4.54 4.54 0 00-8.34 0h-6.83a4.5 4.5 0 00-4.17-2.76A4.38 4.38 0 1014.72 26H21a4.49 4.49 0 008.92 0H33a1 1 0 001-1v-9a4 4 0 00-4-4zM10.26 28a2.38 2.38 0 110-4.75 2.38 2.38 0 110 4.75zm15.17 0a2.38 2.38 0 112.5-2.37 2.44 2.44 0 01-2.5 2.37z"
        fill="#fff"
      />
    </Svg>
  );
}

export { Truck };
