/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Header } from "src/component/Header";
import { MenuBody } from "src/component/Menu/MenuBody";
import { Footer } from "src/component/Footer";

export const Menu = () => {
  document.title = "メニュー｜KUJIRA Cafe Website";
  return (
    <div>
      <Header />
      <MenuBody />
      <Footer />
    </div>
  );
};
