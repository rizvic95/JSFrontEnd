import React from 'react';
import LogoComponent from './LogoComponent';


import logo1 from '../images/logo1.jpg'; 
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';
import logo4 from '../images/logo4.jpg';
import logo5 from '../images/logo5.jpg';
import logo6 from '../images/logo6.jpg';

function ParentComponent() {
  return (
    <div className="wrapper">
      <div className="logos-container">
        <LogoComponent logoSrc={logo1} altText="Logo 1" />
        <LogoComponent logoSrc={logo2} altText="Logo 2" />
        <LogoComponent logoSrc={logo3} altText="Logo 3" />
        <LogoComponent logoSrc={logo4} altText="Logo 4" />
        <LogoComponent logoSrc={logo5} altText="Logo 5" />
        <LogoComponent logoSrc={logo6} altText="Logo 6" />
      </div>
    </div>

  );
}

export default ParentComponent;
