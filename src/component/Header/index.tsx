/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Logo } from "src/component/Header/Logo";
import { Navigation } from "src/component/Header/Navigation";

export const Header = () => {
  return (
    <div>
      <Logo />
      <Navigation />
    </div>
  );
};
