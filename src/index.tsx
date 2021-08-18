/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { jsx, Global, css } from "@emotion/react";
import ReactDOM from "react-dom";
import { App } from "src/App";
import reportWebVitals from "./reportWebVitals";
import emotionReset from "emotion-reset";

const globalStyles = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  body {
    font-size: 10px;
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
