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
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
          
        </Switch>
      </Router>
      <div className="top-decoration">
        <div className="red-decoration"></div>
        <div className="orange-decoration"></div>
        <div className="yellow-decoration"></div>
      </div>
      <div className="App">
        
      </div>
    </div>
  );
  }
