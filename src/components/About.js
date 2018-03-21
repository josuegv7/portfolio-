import React, {Component} from "react";
import hero from '../assets/images/hero3.jpg';
import style from '../style/About.css';

export default class About extends Component {
  render() {
    return (
      <div id="about" className={style.about}>
        <div className={style.aboutcontainer}>
          <div className="section-title text-center center">
          <h2>About Me</h2>
          <hr/>
          </div>
          <div>
            <div className={style.textcenter} className="col-md-12 text-center"><img src={hero}/></div>
            <div className={style.aboutinfo}>
              <div className={style.abouttext}>
                <h4>Need a dynamic developer?</h4>
                 <p>I am a passionate full stack developer, 
                    interested in the intersection of technology and healthcare. 
                    I focus on accessible Front End Development and
                    Back End Applications. My passion is to use 
                    technology-based solutions, to help solve your challenges. 
                    When I’m not working on a project,
                    you can find me on the soccer field, watching my favorite
                    British comedies or cooking authentic Ecuadorian cuisine.</p>
                <a href="#project" className={style.aboutButton}>My Portfolio</a> </div>
                
              </div>
            </div>
          </div>
        </div>

    )
  }
}

