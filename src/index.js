import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'




ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>,
  document.getElementById('root'));
