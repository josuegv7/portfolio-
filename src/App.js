import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Technology from './components/Technology';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Cover />
        <Technology />
        <Project />
        <About />
        <Contact />
      </div>
    );
  }
}
export default App;
