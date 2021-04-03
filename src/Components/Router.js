/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => {
  return (
    <Router>
      <>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" exact component={Search} />
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </>
    </Router>
  );
};
