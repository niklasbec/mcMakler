import React from "react";
import "./App.less";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Navigation/Header/Header";
import Applicants from "./components/Navigation/Header/Applicants";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/applicants" component={Applicants} />
      </Switch>
    </div>
  );
}

export default App;
