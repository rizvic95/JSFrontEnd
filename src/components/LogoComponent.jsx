import React from 'react';
import './LogoComponent.css';

function LogoComponent({ logoSrc, altText = 'Logo' }) {
  return (
    <div className="logo-container">
      <img src={logoSrc} alt={altText} className="logo-image" />
    </div>
  );
}

export default LogoComponent;
