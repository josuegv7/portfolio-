import React, {Component} from "react";
import coverimage from '../assets/images/cover.jpg';
import style from '../style/Cover.css';

export default class Cover extends Component {
  render() {
    return (
      <header className={style.coverStyle}>
        <div className="container my-auto">
          <div className="row">
          </div>
        </div>
      </header>
    )
  }
}
