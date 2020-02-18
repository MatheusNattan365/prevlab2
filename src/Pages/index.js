import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// imported Pages
import LogingPage from './AuthPages/LoginPage';
import DashBoard from './AppPages/Paperbase';


let loggedIn = null;

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login"  component={LogingPage} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/">
            {loggedIn ? <Redirect to="/dashboard" /> : <LogingPage />}
          </Route>
        </Switch>
    </Router>
  );
}

