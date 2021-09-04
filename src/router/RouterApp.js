import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import DetailMovie from "../pages/DetailMovie";
import MyListMovie from "../pages/MyListMovie";
import MovieList from "../pages/MovieList";

const RouterApp = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={MovieList} exact />
        <Route path="/detail/:id" component={DetailMovie} />
        <Route path="/movie" component={MyListMovie} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
