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
import _ from 'lodash';

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
  constructor(props) {
    super(props);
    this.state = {
      projects: {
        0: {
          id: 0,
          projectName: 'Таск менеджер',
          description: 'SPA для постановки задач и контроля их исполнения',
          url: 'https://gitlab.com/sofika_1/react-tasks',
        },
      },
      tasks: {
        0: {
          id: 0,
          title: 'каркас проекта',
          description: 'сделать каркас структуры проекта (роутинг)',
          type: 'task',
          priority: 'high',
          implementer: 'Azamat Abdullin',
          taskDirector: 'Igor Grange',
          status: 'active',
          projectId: 0,
        },
        1: {
          id: 1,
          title: 'раздел Настройки',
          description: 'реализовать компонент с возможностью изменения настроек',
          type: 'task',
          priority: 'high',
          implementer: 'Raul Baimukhametov',
          taskDirector: 'Igor Grange',
          status: 'active',
          projectId: 0,
        },
      },
      settings: {
        firstName: 'Azamat',
        lastName: 'Abdullin',
        nickname: 'usmanaav',
        email: 'email@host.domain',
        password: '',
        role: 'user',
      },
    }
  }

  writeToLog = (taskId, newStatus) => {
    const { implementer, taskDirector } = this.state.tasks[taskId];
    const newLogRecordId = _.uniqueId();
    const newLogRecord = {
      date: Date.now(),
      status: newStatus,
      implementer,
      taskDirector,
      taskId,
    };

    this.setState({
      ...this.state,
      log: {
        ...this.state.log,
        [newLogRecordId]: newLogRecord,
      },
    });
  }

  changeTaskStatus = (taskId, newStatus) => {
    const { tasks } = this.state;
    const updatedTask = { ...tasks[taskId], status: newStatus };

    this.setState({
      ...this.state,
      tasks: {
        ...tasks,
        [taskId]: updatedTask,
      },
    });

    this.writeToLog(taskId, newStatus);
  }

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
          <PrivateRoute
            path="/projects/"
            component={Projects}
            tasks={this.state.tasks}
            changeTaskStatus={this.changeTaskStatus}
          />
          <PrivateRoute path="/log/" component={Log} />
          <PrivateRoute path="/users/" component={Users} />
          <PrivateRoute
            path="/settings/"
            component={Settings}
            settings={this.state.settings}
          />
          <Route path="/login/" component={Login} />
        </div>
      </Router>
    );
  }
};
