import React, {Component} from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Technology extends Component {
  render() {
    const serviceStyle = {
      marginTop: '80px',
      padding: '6rem 0',
      backgroundColor: "#DDD8B8"
    }
    return (
      <section id="services" style={serviceStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Technologies</h2>
              <hr className="my-4"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fa fa-4x fa-desktop text-primary mb-3 sr-icons"></i>
                <h3 className="mb-3">Front End </h3>
                <p className="text-muted mb-0">HTML,CSS,JavaScript, ReactJS, SaSS, JQuery, Ajax, BootStrap</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                <h3 className="mb-3">Back End </h3>
                <p className="text-muted mb-0">Ruby on Rails, Django/Python</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fa fa-4x fa-server text-primary mb-3 sr-icons"></i>
                <h3 className="mb-3">Other</h3>
                <p className="text-muted mb-0">Heroku, Github, AWS, MongoDB, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
