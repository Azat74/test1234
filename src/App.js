import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import Dashboard from './components/dashboard/';
import Projects from './components/projects/';
import Log from './components/log/';
import Users from './components/users/';
import Settings from './components/settings/';
import PrivateRoute from './components/privateRoute';
import fakeAuth from './components/auth';
import Login from './components/login';

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <AuthButton />
            <ul className="header">
              <li>
                <NavLink to="/" id="dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/projects/" id="projects">Проекты</NavLink>
              </li>
              <li>
                <NavLink to="/log/" id="log">Лог</NavLink>
              </li>
              <li>
                <NavLink to="/users/" id="users">Пользователи</NavLink>
              </li>
              <li>
                <NavLink to="/settings/" id="settings">Настройки</NavLink>
              </li>
            </ul>
          </nav>

          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute path="/projects/" component={Projects} />
          <PrivateRoute path="/log/" component={Log} />
          <PrivateRoute path="/users/" component={Users} />
          <PrivateRoute path="/settings/" component={Settings} />
          <Route path="/login/" component={Login} />
        </div>
      </Router>
    );
  }
};
