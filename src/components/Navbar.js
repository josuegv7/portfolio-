import React, {Component} from 'react'; 
import style from '../style/navbar.css';
import logo from '../assets/images/logoBG.png';

export default class NavBar extends Component {
    render() {
        return(
    
        <header className={style.header}>
            <div className={style.logo}>
               
            </div>
            <div className={style.content}>
                <div className={style.inner}>
                    <h1>Boony Guzman</h1>
                    <p>Full Stack Web Developer</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#intro">About</a></li>
                    <li><a href="#technology">Tech</a></li>
                    <li><a href="#about">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
            
                </ul>
            </nav>
        </header>
   
        )
    }
}