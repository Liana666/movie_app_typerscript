import React from "react";
import { Route } from "react-router";

import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Route path="/main" component={Main}></Route>
      <Route path="/profile" component={Profile}></Route>
    </div>
  );
}

export default App;
