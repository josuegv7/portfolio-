import React, {Component} from "react";
import style from '../style/Project.css';
import ConnectFour from '../assets/images/ConnectFour.png'
import HolidayTags from '../assets/images/Holidaytags.png'
import myMovies from '../assets/images/myMovies.png'

export default class Project extends Component {
  render() {
    return (
      <section className={style.portfolioSection}>
      <h1 className={style.projectTitle}> Portfolio</h1>
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" className={style.portfolioStyle} href="https://bgconnectfour.herokuapp.com/" target="_blank">
                <img className="img-fluid" src={ConnectFour} alt='Project' className={style.projectimage}/>
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content" className={style.projectCategory}>
                    <div className="project-name" className={style.projectName}>
                      ConnectFour
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>
                        JavaScript(jQuery)
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
