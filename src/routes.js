import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './containers/login'
import Signup from './containers/signup';

const history = require("history").createBrowserHistory

const ProjectRouter = () => (
  <Router
    history={history}
  >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
    </Routes>
  </Router>
)

export default ProjectRouter;
