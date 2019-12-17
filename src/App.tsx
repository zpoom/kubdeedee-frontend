import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, LineGraph } from "./components";
import { Home, DashBoard, HeartRate, Sound } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyB3z5BFbT_EuZmfO5MhHK8dsShEO95s7h0",
//   authDomain: "kubdeedee-3f5e2.firebaseapp.com",
//   databaseURL: "https://kubdeedee-3f5e2.firebaseio.com",
//   projectId: "kubdeedee-3f5e2",
//   storageBucket: "kubdeedee-3f5e2.appspot.com",
//   messagingSenderId: "944937426202",
//   appId: "1:944937426202:web:87b6081a02bf37e486a0a3",
//   measurementId: "G-8X3BJW97LQ"
// };
// firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/user/:name" component={DashBoard}></Route>
            <Route path="/heart-rate" component={HeartRate}></Route>
            <Route path="/sound" component={Sound}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
