/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { AboutBody } from "src/component/About/AboutBody";
import { Footer } from "src/component/Footer";

export const About = () => {
  return (
    <div>
      <Header />
      <AboutBody />
      <Footer />
    </div>
  );
};