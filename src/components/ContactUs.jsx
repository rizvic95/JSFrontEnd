import React from "react";
import "./ContactUs.css";
import emailIcon from "../images/evelope.jpg";
import careerIcon from "../images/careers.jpg";

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      {/* Left Section */}
      <div className="contact-us-options">
        <div className="contact-us-breadcrumbs">
          <a href="/">Homepage</a> &nbsp;»&nbsp; <span>Contact</span>
        </div>
        <h1>Contact Us</h1>
        <div className="contact-us-card">
          <img src={emailIcon} alt="Email Us" className="contact-us-icon" />
          <div className="contact-us-details">
            <h2>Email us</h2>
            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
            <a href="/message" className="contact-us-link">Leave a message →</a>
          </div>
        </div>
        <div className="contact-us-card">
          <img src={careerIcon} alt="Careers" className="contact-us-icon" />
          <div className="contact-us-details">
            <h2>Careers</h2>
            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
            <a href="/application" className="contact-us-link">Send an application →</a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="consultation-form-wrapper">
        <h2>Get Online Consultation</h2>
        <form>
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <select required>
            <option value="">Specialist</option>
            <option value="specialist1">Specialist 1</option>
            <option value="specialist2">Specialist 2</option>
          </select>
          <button type="submit">Make an appointment</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
