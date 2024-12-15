import './HeroSection.css';
import React from 'react';

import appstore from '../images/appstore.jpg';
import googleplay from '../images/googleplay.jpg';
import iPhone12one from '../images/iPhone12one.jpg';
import iPhone12Two from '../images/iPhone12Two.jpg';

function HeroSection() {
  return (
    <div className="hero-background">
      <div className="wrapper">
        <section className="custom-hero-section">
          <div className="hero-text">
            <h1>Manage All Your Money in One App</h1>
            <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="hero-buttons">
              <img src={appstore} alt="Download on the App Store" className="store-button" />
              <img src={googleplay} alt="Get it on Google Play" className="store-button" />
            </div>
          </div>
          <div className="hero-images">
            <img src={iPhone12Two} alt="Mobile phone 1" className="iphone-image" />
            <img src={iPhone12one} alt="Mobile phone 2" className="iphone-image" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
