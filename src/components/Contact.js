import React, {Component} from "react";
import "../App.css"
import { Document, Page } from 'react-pdf'
import Resume from '../assets/Boony_Guzman_resume3.pdf'

export default class Contact extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {

    const { pageNumber } = this.state;
    const pdfStyle = {
      marginLeft: '19%',
      marginTop: '3%',

    }

    const social = {
      fontSize: '16px',
      padding: '10px',
      fontFamily: "Nunito Sans",
      fontWeight: '200',
    }

    const contactStyle = {
      marginTop: '80px',
      padding: '6rem 0',
    }
    return (
      <section id="contact" style={contactStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading">Let's Get In Touch!</h2>
              <hr className="my-4"/>
              <p className="mb-5"> Want to get in touch with me, start your next project? Drop me a line anytime.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-2x fa-linkedin text-primary mb-3 sr-icons">
              <a href="https://www.linkedin.com/in/boony-guzman/" style={social}>Linkedin</a>
            </i>
            <br/>
            <i className="fa fa-2x fa-github-alt text-primary mb-3 sr-icons">
              <a href="https://github.com/josuegv7" style={social}>Github</a>
            </i>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:Josueguzman89@gmail.com">Josueguzman89@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="row" style={pdfStyle}>
          <h1> Resume </h1>
          <br></br>
          <Document file={Resume} onLoadSuccess={this.onDocumentLoad} >
            <Page pageNumber={pageNumber} scale= '0.7'/>
          </Document>
        </div>
      </section>
    )
  }
}
