import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/SiliconLogo.png';

function Header() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="left-section">
          <div className="logo">
            <img src={logo} alt="Silicon Logo" />
            <span className="logo-text">Silicon</span>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="actions">
          <div className="dark-mode-toggle">
            <span>Dark Mode</span>
            <input type="checkbox" />
          </div>
          <button className="sign-in">Sign in / up</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
