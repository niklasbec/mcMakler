import React from "react";
import "./App.less";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Navigation/Header/Header";
import Applicants from "./components/Applicants/Applicants";
import Footer from "./components/Navigation/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/applicants/:id?" component={Applicants} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
