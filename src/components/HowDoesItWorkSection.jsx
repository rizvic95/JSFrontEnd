// HowDoesItWorkSection.jsx
import React from 'react';
import phoneImage1 from '../images/iPhone1212.png'; // Replace with your image paths
import './HowDoesItWorkSection.css';

function HowDoesItWorkSection() {
  return (
    <section className="how-it-works-section">
      <div className="content-wrapper">
        <h2>How Does It Work?</h2>
        <div className="phones-container">
          <img src={phoneImage1} alt="Phone showing app features" className="phone-image" />
        </div>
        <div className="transaction-info">
          <h3>Latest transaction history</h3>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique
            quisque hac in consectetur condimentum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowDoesItWorkSection;
