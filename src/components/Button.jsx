import React from 'react';
import './Button.css';

const Button = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
