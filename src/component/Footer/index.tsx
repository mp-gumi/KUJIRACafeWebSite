/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import backgroundFooter from "src/component/Footer/footer-bg.png";
import { textBlue } from "src/component/Home/HomeBody";

export const Footer = () => {
  return (
    <div
      css={css`
        background-image: url(${backgroundFooter});
        background-repeat: no-repeat;
        vertical-align: top;
        padding: 80px 15px 20px;
        margin-top: 30px;
      `}
    >
      <small
        css={css`
          font-size: 12px;
          color: ${textBlue};
          margin: 12px 0;
          text-align: center;
        `}
      >
        &copy;Copyright KUJIRA Cafe. All rights reserved.
      </small>
    </div>
  );
};
