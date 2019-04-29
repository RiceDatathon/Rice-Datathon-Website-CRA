import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/navbar/navbar';
import SplashPage from './components/splashPage/splashPage';
import About from './components/about/about';
import Schedule from './components/schedule/schedule';
import FAQs from './components/faqs/faqs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Element name='home'>
          <SplashPage />
        </Element>

        <Element name='about'>
          <About />
        </Element>

        <Element name='schedule'>
          <Schedule />
        </Element>

        <Element name='faqs'>
          <FAQs />
        </Element>
      </div>
    );
  }
}

export default App;
