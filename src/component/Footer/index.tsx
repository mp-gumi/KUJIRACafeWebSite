/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import backgroundFooter from "src/component/Footer/footer-bg.png";

export const Footer = () => {
  return (
    <div>
      <img src={backgroundFooter} alt="line" />
      <small>&copy;Copyright KUJIRA Cafe. All rights reserved.</small>
    </div>
  );
};
