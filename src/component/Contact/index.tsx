/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { ContactBody } from "src/component/Contact/ContactBody";
import { Footer } from "src/component/Footer";

export const Contact = () => {
  return (
    <div>
      <Header />
      <ContactBody />
      <Footer />
    </div>
  );
};
