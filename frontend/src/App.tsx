import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./Components/Authentication/Login.Component";
import Chat from "./Components/Chat/Chat.Component";
import Dashboard from "./Components/Dashboard/Dashboard.Component";

export default function App() {
  return (
    <div>
      <Router>
      <div className="App">
      <Switch>
          <Route path="/login" component={Login}>
          </Route>
          <Route path="/chat/:recipient" component={Chat}>
          </Route>
          <Route exact path="/" component={Dashboard}>
          </Route>
        </Switch>
        </div>
      </Router>
      <div className="top-decoration">
        <div className="red-decoration"></div>
        <div className="orange-decoration"></div>
        <div className="yellow-decoration"></div>
      </div>
    </div>
  );
  }
