import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './containers/login'
import Signup from './containers/signup';

const history = require("history").createBrowserHistory

const ProjectRouter = () => (
  <Router
    history={history}
  >
    <Switch>
      <Route
        exact path='/'
        component={App}
      />
      <Route
        exact path='/login'
        component={Login}
      />
      <Route
        exact path='/signup'
        component={Signup}
      />
    </Switch>
  </Router>
)

export default ProjectRouter;
