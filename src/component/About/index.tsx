/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Header } from "src/component/Header";
import { AboutBody } from "src/component/About/AboutBody";
import { Footer } from "src/component/Footer";

export const About = () => {
  document.title = "店舗案内｜KUJIRA Cafe Website";
  return (
    <div>
      <Header />
      <AboutBody />
      <Footer />
    </div>
  );
};
