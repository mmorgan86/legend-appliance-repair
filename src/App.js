import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import Carousel from './components/layout/Home/Carousel';
import About from './components/layout/About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Carousel />
          <About />
        </div>
      </Router>
    );
  }
}

export default App;
