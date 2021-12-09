import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function FileDeleted(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-file-text"
      {...props}
    >
      <Path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <Path d="M14 2L14 8 20 8" />
      <Path data-name="Line 22" d="M6 0L0 6" transform="translate(8 12)" />
      <Path data-name="Line 23" d="M0 0L6 6" transform="translate(8 12)" />
    </Svg>
  );
}

export { FileDeleted };
