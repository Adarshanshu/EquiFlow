import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import "./home.css";
function HomePage() {
    return ( 
        <div className="home-page">
          <Hero/>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
          <Footer/>

        </div>
     );
}

export default HomePage;
