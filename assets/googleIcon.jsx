import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        fill="url(#pattern0)"
        d="M0.333252 0.825195H18.477552000000003V19.158495000000002H0.333252z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_19_775" transform="scale(.01042 .0103)" />
        </Pattern>
        <Image
          id="image0_19_775"
          width={96}
          height={97}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
