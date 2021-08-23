/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { ContactBody } from "src/component/Contact/ContactBody";
import { Footer } from "src/component/Footer";

export const Contact = () => {
  document.title = "お問い合わせ｜KUJIRA Cafe Website";
  return (
    <div>
      <Header />
      <ContactBody />
      <Footer />
    </div>
  );
};
