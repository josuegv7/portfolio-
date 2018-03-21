import React, {Component} from "react";
import { Document, Page } from 'react-pdf';
import style from '../style/Contact.css';
import Resume from '../assets/Boony_J_Guzman.pdf'

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className={style.contactStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading">GET IN TOUCH</h2>
              <hr className="my-4"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-2x fa-linkedin text-primary mb-3 sr-icons">
              <a href="https://www.linkedin.com/in/boony-guzman/" target="_blank" className={style.social}>Linkedin</a>
            </i>
            <br/>
            <i className="fa fa-2x fa-github-alt text-primary mb-3 sr-icons">
              <a href="https://github.com/josuegv7" target="_blank" className={style.social}>Github</a>
            </i>
            <i className="fa fa-2x fa-paperclip text-primary mb-3 sr-icons">
              <a href={Resume} target="_blank" className={style.social}>Resume</a>
            </i>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:Josueguzman89@gmail.com">Josueguzman89@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}
