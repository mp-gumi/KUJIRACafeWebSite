/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "src/component/Home";

export const maxWidth = "767px";

export const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
