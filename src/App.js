import React, { Component } from 'react';
import Technology from './components/Technology';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <About />
        <Technology />
        <Project />
        <Contact />
      </div>
    );
  }
}
export default App;
