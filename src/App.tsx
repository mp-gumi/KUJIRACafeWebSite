/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "src/component/Header";
import { Footer } from "src/component/Footer";
import { IndexBody } from "src/component/IndexBody";

export const maxWidth = "767px";

export const App = () => {
  return (
    <div
      css={css`
        background-color: #eeece9;
      `}
    >
      <div
        css={css`
          max-width: 960px;
          margin: 0 auto;
          @media (max-width: ${maxWidth}) {
            margin: 0 8px;
          }
        `}
      >
        <Header />
        <IndexBody />
        <Footer />
      </div>
    </div>
  );
};

export default App;
