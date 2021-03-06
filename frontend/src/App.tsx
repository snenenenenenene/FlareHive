import React,{useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Login from "./Components/Authentication/Login.Component";
import Register from "./Components/Authentication/Register.Component";
import Chat from "./Components/Chat/Chat.Component";
import Dashboard from "./Components/Dashboard/Dashboard.Component";
import Account from "./Components/Settings/Account.Component";
import Integrations from "./Components/Settings/Integrations.Component";
import Settings from "./Components/Settings/Settings.Component";

export default function App() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [userData, setUserData] = useState(user);
  const [authenticated, setAuthenticated] = useState(user.authenticated);  

  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    // console.log(user)
    // setAuthenticated(user.authenticated)
  }, []);

  
if(authenticated === true) {
  return (
    <div>
      <Router>
      <div className="App">
      <Switch>
          <Route 
          path="/chat/:recipient"
          component={Chat}
          />

          {/* SETTINGS */}

          <Route 
          path="/settings/account"
          component={Account}
          />
          <Route 
          path="/settings/integrations"
          component={Integrations}
          />
          <Route 
          path="/settings"
          >
          <Redirect to="/settings/account"/>
          </Route>
          
          <Route
          path="/home"
          component={Dashboard}
          />
          <Route 
          exact path="/" 
          component={Dashboard}
          />
          <Route 
          exact path="/login" 
          component={Dashboard}
          />
        </Switch>
        </div>
      </Router>
      <div className="top-decoration">
        <div className="red-decoration"></div>
        <div className="orange-decoration"></div>
        <div className="yellow-decoration"></div>
      </div>
    </div>
  )
}
  else {
    return (
      <div>
      <Router>
      <div className="App">
      <Switch>
      <Route 
      path="/login" 
      component={Login}/>
      <Route 
      path="/register"
      component={Register}/>
      <Route 
      path="/*"
      component={Login}/>
    </Switch>
    </div>
    </Router>
    <div className="top-decoration">
        <div className="red-decoration"></div>
        <div className="orange-decoration"></div>
        <div className="yellow-decoration"></div>
      </div>
    </div>
      
    )
  }
}
