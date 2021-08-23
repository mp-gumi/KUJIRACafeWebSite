/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { AccessBody } from "src/component/Access/AccessBody";
import { Footer } from "src/component/Footer";

export const Access = () => {
  document.title = "アクセス｜KUJIRA Cafe Website";
  return (
    <div>
      <Header />
      <AccessBody />
      <Footer />
    </div>
  );
};
