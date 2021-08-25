/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import keyVisual from "src/component/Home/HomeBody/keyvisual.jpg";

export const HeroImage = () => {
  return (
    <div>
      <img
        src={keyVisual}
        alt=""
        css={css`
          width: 100%;
        `}
      />
    </div>
  );
};
