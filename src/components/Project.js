import React, {Component} from "react";
import style from '../style/Project.css';
import ConnectFour from '../assets/images/ConnectFour.png'
import HolidayTags from '../assets/images/Holidaytags.png'
import myMovies from '../assets/images/myMovies.png'
import SCamp from '../assets/images/SCamp.png'

export default class Project extends Component {
  render() {
    return (
      <section id="project" className={style.portfolioSection}>
      <h1 className={style.projectTitle}> Portfolio</h1>
         <h6><a href="https://github.com/josuegv7" target="_blank" className={style.moregit}>More @ Github</a></h6>
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" className={style.portfolioStyle} href="https://strengthcamplandingpage.herokuapp.com/" target="_blank">
                <img className="img-fluid" src={SCamp} alt='Project' className={style.projectimageSC}/>
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content" className={style.projectCategory}>
                    <div className="project-name" className={style.projectName}>
                      Strength Camp
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>
                        JavaScript(ReactJS)
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" className={style.portfolioStyle} href="https://holidaytagssmv.herokuapp.com/" target="_blank">
                <img className="img-fluid" src={HolidayTags} alt='Project'/>
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" className={style.projectName}>
                      HolidayTags
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>
                        Django(Python), BootStrap, Stripe API, Ajax
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" className={style.portfolioStyle} href="https://mymoviesapp.herokuapp.com/" target="_blank">
                <img className="img-fluid" src={myMovies} alt='Project' />
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" className={style.projectName}>
                      myMovies
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>
                        Reactjs, OAuth, Cloudinary
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
