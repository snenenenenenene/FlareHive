import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import Login from "./Components/Authentication/Login.Component";
import Chat from "./Components/Chat/Chat.Component";
import Dashboard from "./Components/Dashboard/Dashboard.Component";
import Settings from "./Components/Settings/Settings.Component";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  if (authenticated === true) {
  return (
    <div>
      <Router>
      <div className="App">
      <Switch>
          <Route path="/chat/:recipient" component={Chat}>
          </Route>
          <Route exact path="/settings" component={Settings}>
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
  )
}
  else {
    return (
      <div>
      <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"></Redirect>
        </Route>
          <Route path="/login" component={Login}>
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
    )
  }
  }
