import React, {Component} from "react";
import "../App.css";
import coverimage from '../assets/images/cover.jpg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export default class Cover extends Component {
  render() {
    const coverStyle = {
      paddingTop: '10rem',
      paddingBottom: 'calc(10rem - 56px)',
      backgroundImage: 'url('+coverimage+')',
      backgroundPosition: 'center center',
      WebkitBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover',
      opacity: '0.85'
    }
    const covertitle ={
      fontSize: '2rem',
      color: 'black',
      zIndex: '2',
    }

    return (
      <header className="masthead text-center text-white d-flex" style={coverStyle}>
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase">
                <strong style={covertitle}>Boony Guzman</strong>
              </h1>
            </div>
            <div className="col-lg-8 mx-auto">
              <p className="text-faded mb-5" style={covertitle}>Full Stack Web Developer</p>
              
            </div>
          </div>
        </div>
      </header>
    )
  }
}
