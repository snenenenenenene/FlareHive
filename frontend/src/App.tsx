import userEvent from "@testing-library/user-event";
import {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import Login from "./Components/Authentication/Login.Component";
import Register from "./Components/Authentication/Register.Component";
import Chat from "./Components/Chat/Chat.Component";
import Dashboard from "./Components/Dashboard/Dashboard.Component";
import Settings from "./Components/Settings/Settings.Component";

export interface User {
  email: string;
  password: string;
  authenticated: boolean;
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if(localStorage.getItem('user')) {
    setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    setAuthenticated(user?.authenticated)
    }
    else {
    setAuthenticated(false)
    }
  });
  return (
    <div>
      <Router>
      <div className="App">
      <Switch>
          <Route path="/chat/:recipient" component={Chat}>
          </Route>
          <Route path="/settings" component={Settings}>
          </Route>
          <Route path="/home" component={Dashboard}>
          </Route>
          <Route exact path="/" render={() => (authenticated ? (<Redirect to="/home"/>) : (<Login/>))}/>
          <Route exact path="/login" render={() => (authenticated ? (<Redirect to="/home"/>) : (<Login/>))}/>
          <Route exact path="/register" render={() => (authenticated ? (<Redirect to="/home"/>) : (<Register/>))}/>
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
