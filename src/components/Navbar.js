import React, {Component} from 'react'; 
import style from '../style/navbar.css';
import navicon from '../assets/images/navicon.png';
export default class NavBar extends Component {
    render() {
        return(
    
        <header className={style.header}>
            <div className={style.logo}>
            <span><img className="img-fluid" src={navicon} alt='Project' className={style.navicon} /></span>

            </div>
            <div className={style.content}>
                <div className={style.inner}>
                    <h1>Boony Guzman</h1>
                    <p>Full Stack Web Developer</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#project">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
            
                </ul>
            </nav>
        </header>
   
        )
    }
}