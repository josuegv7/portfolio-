import React, {Component} from "react";
import style from '../style/Project.css';
import ConnectFour from '../assets/images/ConnectFour.png';
import HolidayTags from '../assets/images/Holidaytags.png';
import myMovies from '../assets/images/myMovies.png';
import SCamp from '../assets/images/SCamp.png';
import stockpile from '../assets/images/stockpile.png'
import stockM from '../assets/images/stockM.png'
import node from '../assets/images/nodejs_1.png';
import react from '../assets/images/react_1.png';
import mongodb from '../assets/images/mongodb.png';
import python from '../assets/images/Python.png';
import django from '../assets/images/django.png';
import postsql from '../assets/images/postsql.png';




export default class Project extends Component {
  render() {
    return (
      <section id="project" className={style.portfolioSection}>
      <h1 className={style.projectTitle}> Portfolio</h1>
         <h6><a href="https://github.com/josuegv7" target="_blank" className={style.moregit}>More @ Github</a></h6>
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" className={style.portfolioStyle} href="https://github.com/josuegv7/StrengthCamp" target="_blank">
                <img className="img-fluid" src={SCamp} alt='Project' className={style.projectimageSC}/>
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content" className={style.projectCategory}>
                    <div className="project-name" className={style.projectName}>
                      Strength Camp
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>
                      <img className="img-fluid" src={react} alt='Project' className={style.projecticons} />
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" className={style.portfolioStyle} href="https://github.com/josuegv7/HolidayTags" target="_blank">
                <img className="img-fluid" src={HolidayTags} alt='Project' className={style.projectimageSC}/>
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" className={style.projectName}>
                      HolidayTags
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>
                        <img className="img-fluid" src={django} alt='Project' className={style.projecticons} />
                        <img className="img-fluid" src={postsql} alt='Project' className={style.projecticons} />
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" className={style.portfolioStyle} href="https://github.com/josuegv7/myMovies" target="_blank">
                <img className="img-fluid" src={myMovies} alt='Project' className={style.projectimageSC} />
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" className={style.projectName}>
                      myMovies
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>
                      <img className="img-fluid" src={react} alt='Project' className={style.projecticons} />
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className = "portfolio-box" className = {style.portfolioStyle} href = "https://github.com/josuegv7/StockPile" target = "_blank">
                <img className="img-fluid" src={stockpile} alt='Project' className={style.projectimageSC} />
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" className={style.projectName}>
                      Stockpile
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>

                        <img className="img-fluid" src={node} alt='Project' className={style.projecticons} />
                        <img className="img-fluid" src={react} alt='Project' className={style.projecticons} />
                        <img className="img-fluid" src={mongodb} alt='Project' className={style.projecticons} />
                      </div>
                    </div>
                  </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className = "portfolio-box" className = {style.portfolioStyle} href = "https://github.com/josuegv7/stockmarket-frontend" target = "_blank" >
                <img className="img-fluid" src={stockM} alt='Project' className={style.projectimageSC} />
                  <div className="portfolio-box-caption" className={style.portfolioBoxCaption}>
                    <div className="portfolio-box-caption-content">
                    <div className="project-name" className={style.projectName}>
                      Stocks Portfolio
                    </div>
                      <div className="project-category text-faded" className={style.projectCategory}>

                        <img className="img-fluid" src={react} alt='Project' className={style.projecticons} />

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
