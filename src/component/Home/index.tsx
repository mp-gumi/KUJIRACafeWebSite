/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Header } from "src/component/Header";
import { HomeBody } from "src/component/Home/HomeBody";
import { Footer } from "src/component/Footer";

export const Home = () => {
  document.title = "ホーム｜KUJIRA Cafe Website";
  return (
    <div>
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
};
