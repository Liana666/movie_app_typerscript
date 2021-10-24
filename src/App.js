import React from "react";
import { Route } from "react-router";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/main" component={Main}></Route>
      <Route path="/profile" component={Profile}></Route>
    </div>
  );
}

export default App;
