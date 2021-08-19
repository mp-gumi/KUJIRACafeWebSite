/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { Body } from "src/component/About/Body";
import { Footer } from "src/component/Footer";

export const About = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
