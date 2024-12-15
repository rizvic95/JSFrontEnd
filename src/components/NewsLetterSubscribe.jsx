import React from "react";
import "./NewsletterSubscribe.css";
import notificationBell from "../images/notification.jpg"; // Path to the bell icon image

const NewsletterSubscribe = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <img src={notificationBell} alt="Notification Bell" className="notification-bell" />
        <p className="newsletter-text">Subscribe to our newsletter to stay <br /> informed about latest updates</p>
      </div>
      <div className="newsletter-form">
        <input type="email" placeholder="Your Email" className="newsletter-input" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
