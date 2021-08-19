/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import logo from "src/component/Header/Logo/logo.png";

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
        `}
      />
    </div>
  );
};
