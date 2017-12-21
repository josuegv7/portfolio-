import React, {Component} from "react";
import "../App.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light fixed-top  ">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">Boony Guzman</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/contact">Contact Me!</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}
