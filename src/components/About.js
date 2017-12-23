import React, {Component} from "react";
import "../App.css";
import hero from '../assets/images/hero.jpg'


export default class About extends Component {
  render() {
    const aboutStyle = {
      backgroundColor: "#DDD8B8",
      marginTop: '80px',
      padding: '6rem 0'

    }
    const aboutLeft = {
      float: 'left',
      width: '60%',
      height: '100',
      margin: '5',
    }
    const aboutRight = {
      float: 'right',
      width: '30%',
      height: '100',
      margin: '5',
      float: 'right',
      width: '43%',
      textAlign: 'justify',
      fontWeight: '600',
      fontSize: 'unset',
    }
    const herostyle = {
      height: '100%',
      width: '52%',
      borderRadius: '32px',
      marginLeft: '23%',
      marginTop: '2%',
    }
    const aboutTitle = {
      textAlign: "center",
      marginBottom: "2%",
    }

    return (
      <section style={aboutStyle}>
        <div className="container">
          <h3 style = {aboutTitle}> About Me </h3>
          <div className="row">
            <div className="col-md-6 col-md-6 " style={aboutLeft}>
              <img src={hero} style={herostyle}/>
            </div>

            <div className= "col-md-6 col-sm-6 "  style={aboutRight}>
              <p> In need of a dynamic developer? Then look no further.
                  I am a passionate full stack developer. I focus on
                  accessible and usable Front End Development and
                  Back End Applications. My passion is to use
                  technology-based solutions, to help solve your challenges.
                  I am extremely excited to build your own Web Application.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
