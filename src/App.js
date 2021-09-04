import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import RouterApp from "./router/RouterApp";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={RouterApp} />
      </Switch>
    </Router>
  );
}

export default App;
