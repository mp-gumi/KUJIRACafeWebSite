/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { HomeBody } from "src/component/Home/HomeBody";
import { Footer } from "src/component/Footer";

export const maxWidth = "767px";

export const Home = () => {
  return (
    <div>
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
};
