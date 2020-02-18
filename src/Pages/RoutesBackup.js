import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  useParams
} from "react-router-dom";

// imported Pages

import LogingPage from './AuthPages/LoginPage';
import DashBoard from './AppPages/Paperbase';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login" >Login Page</Link>
          </li>
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login"  component={LogingPage} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

