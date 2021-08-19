/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import logo from "src/component/Header/Logo/logo.png";
import { maxWidth } from "src/App";

export const Logo = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <img
        src={logo}
        alt="Kujira Cafe"
        css={css`
          margin: 50px 0 40px;
          cursor: pointer;
          @media (max-width: ${maxWidth}) {
            width: 200px;
            margin: 30px 0;
          }
        `}
      />
    </div>
  );
};
