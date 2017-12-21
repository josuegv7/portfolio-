import React, {Component} from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ConnectFour from '../assets/images/ConnectFour.png'
import HolidayTags from '../assets/images/Holidaytags.png'
import JukeBox from '../assets/images/jukebox.png'

export default class Project extends Component {
  render() {
    const portfolioSection = {
      marginTop: '10%',
    }
   const portfolioStyle = {
      position: 'relative',
      display: 'block',
      maxWidth: '650px',
      margin: '10% 3%',
    }
    const portfolioBoxCaption = {
      // position: 'absolute',
      bottom: '0',
      display: 'block',
      width: '100%',
      height: '100%',
      textAlign: 'center',
    }
    const projectCategory = {
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
    }
    const projectName = {
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'center',
    }
    const projectimage = {
      width: '65%',
      height: '255px',
      margin: 'auto',
    }
    const projectTitle = {
      textAlign: 'center',
      fontWeight: '700',
    }
    return (
      <section style={portfolioSection}>
      <h1 style={projectTitle}> Portfolio</h1>
      <h3 style={projectTitle}>This is some of my work</h3>
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" style={portfolioStyle} href="https://bgconnectfour.herokuapp.com/">
                <img className="img-fluid" src={ConnectFour} />
                  <div className="portfolio-box-caption" style={portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content" style={projectCategory}>
                    <div className="project-name" style={projectName}>
                      ConnectFour
                    </div>
                      <div className="project-category text-faded" style={projectCategory}>
                        JavaScript(jQuery)
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" style={portfolioStyle} href="https://holidaytagssmv.herokuapp.com/">
                <img className="img-fluid" src={HolidayTags}/>
                  <div className="portfolio-box-caption" style={portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" style={projectName}>
                      HolidayTags
                    </div>
                      <div className="project-category text-faded" style={projectCategory}>
                        Django(Python), BootStrap, Stripe API, Ajax
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" style={portfolioStyle} href="https://bgjukebox.herokuapp.com/">
                <img className="img-fluid" src={JukeBox}/>
                  <div className="portfolio-box-caption" style={portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" style={projectName}>
                      JukeBox
                    </div>
                      <div className="project-category text-faded" style={projectCategory}>
                        JavaScript, SoundClound API
                      </div>
                    </div>
                  </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
