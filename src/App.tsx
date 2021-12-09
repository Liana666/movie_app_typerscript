import React from "react";
import { Route, Switch } from "react-router";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import SingleMovieContainer from "./components/SingleMovie/SingleMovieContainer";
import Default from "./components/Default/Default";

type AppType = {}

const App: React.FC<AppType> = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Default}></Route>
        <Route exact path='/movie' component={Main}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/singlemovie" component={SingleMovieContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
