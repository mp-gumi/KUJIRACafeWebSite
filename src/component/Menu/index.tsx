/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { MenuBody } from "src/component/Menu/MenuBody";
import { Footer } from "src/component/Footer";

export const Menu = () => {
  return (
    <div>
      <Header />
      <MenuBody />
      <Footer />
    </div>
  );
};
