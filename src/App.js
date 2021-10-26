import React from "react";
import { Route, Switch } from "react-router";

import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </div>
  );
}

export default App;
