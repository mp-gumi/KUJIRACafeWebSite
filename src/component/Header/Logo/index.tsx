/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import logo from "src/component/Header/Logo/logo.png";

export const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
    </div>
  );
};
