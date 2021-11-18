import * as React from "react";
import Svg, { G, Ellipse, Path } from "react-native-svg";

function Cart(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={45.563}
      viewBox="0 0 48 45.563"
      {...props}
    >
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Ellipse
          data-name="Ellipse 2"
          cx={2}
          cy={1.5}
          rx={2}
          ry={1.5}
          transform="translate(14.918 40.563)"
        />
        <Ellipse
          data-name="Ellipse 3"
          cx={2}
          cy={1.5}
          rx={2}
          ry={1.5}
          transform="translate(37.759 40.563)"
        />
        <Path
          data-name="Path 2"
          d="M1 1h8.182l5.482 27.332a4.089 4.089 0 004.091 3.286h19.881a4.089 4.089 0 004.091-3.286L46 11.206H11.227"
        />
      </G>
    </Svg>
  );
}

export { Cart };
