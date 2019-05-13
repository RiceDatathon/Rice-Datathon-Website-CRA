import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import Navbar from './components/navbar/navbar';
import SplashPage from './components/splashPage/splashPage';
import About from './components/about/about';
import Schedule from './components/schedule/schedule';
import FAQs from './components/faqs/faqs';
import './App.css';

import backgroundImage1 from './static/datathon2019a.jpg';
import backgroundImage2 from './static/datathon2019b.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Element name='home'>
          <SplashPage />
        </Element>

        <Parallax bgImage={backgroundImage1} bgImageAlt='' strength={1000}>
          <Element name='about'>
            <About />
          </Element>
        </Parallax>

        <Element name='schedule'>
          <Schedule />
        </Element>


        <Parallax bgImage={backgroundImage2} bgImageAlt='' strength={1000}>
          <Element name='faqs'>
            <FAQs />
          </Element>
        </Parallax>
      </div>
        );
      }
    }
    
    export default App;
