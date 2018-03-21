import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>,
  document.getElementById('root'));
