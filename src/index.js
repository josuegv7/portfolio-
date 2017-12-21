import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Project from './components/Project'

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/header" component={Header} />
      <Route path="/project" component={Project} />
    </div>
  </Router>,
  document.getElementById('root'));
