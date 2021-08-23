/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "src/component/Home";
import { About } from "src/component/About";
import { Access } from "src/component/Access";
import { Menu } from "src/component/Menu";
import { Contact } from "src/component/Contact";

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
        <BrowserRouter>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/access" exact component={Access} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />

            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
