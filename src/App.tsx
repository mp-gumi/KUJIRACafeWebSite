/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { Footer } from "src/component/Footer";
import { IndexBody } from "src/component/IndexBody";

export const App = () => {
  return (
    <div
      css={css`
        background-color: #eeece9;
      `}
    >
      <Header />
      <IndexBody />
      <Footer />
    </div>
  );
};

export default App;
