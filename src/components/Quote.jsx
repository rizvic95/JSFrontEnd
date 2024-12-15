import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Quote.css";

const Quote = ({ text, rating, name, title, avatar }) => {
  return (
    <div className="quote-container">
      <div className="quote-icon">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <div className="quote-content">
        <div className="quote-rating">
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </div>
        <p className="quote-text">{text}</p>
        <div className="quote-author">
          <img src={avatar} alt={`${name}`} className="quote-avatar" />
          <div className="author-details">
            <span className="author-name">{name}</span>
            <span className="author-title">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
