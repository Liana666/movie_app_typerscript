import React from "react";
import { Route, Switch } from "react-router";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SearchContainer from "./components/Search/SearchContainer";
import Profile from "./components/Profile/Profile";
import SingleMovieContainer from "./components/SingleMovie/SingleMovieContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/search" component={SearchContainer}></Route>
        <Route path="/singlemovie" component={SingleMovieContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
