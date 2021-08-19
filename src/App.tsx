/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "src/component/Home";
import { About } from "src/component/About";
import { Access } from "./component/Access";
import { Menu } from "./component/Menu";
import { Contact } from "./component/Contact";

export const maxWidth = "767px";

export const App = () => {
  return (
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
  );
};

export default App;
