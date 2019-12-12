import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components";
import { Home, DashBoard } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Navbar></Navbar>
      <div>
        <Router>
          <Switch>
            <Route path="/user/:name" component={DashBoard}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
