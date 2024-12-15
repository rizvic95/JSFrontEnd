import React, { useState } from "react";
import "./FAQSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Is any of my personal information stored in the App?", answer: "No, we do not store your personal information in the app." },
    { question: "What formats can I download my transaction history in?", answer: "You can download your transaction history in CSV or PDF formats." },
    { question: "Can I schedule future transfers?", answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat." },
    { question: "When can I use Banking App services?", answer: "Our banking services are available 24/7, including holidays." },
    { question: "Can I create my own password that is easy for me to remember?", answer: "Yes, we encourage you to create a strong yet memorable password during setup." },
    { question: "What happens if I forget or lose my password?", answer: "You can reset your password easily by clicking on the 'Forgot Password' link on the login page." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="wrapper">
        <div className="faq-section">
      {/* Left Side: Contact Options */}
      <div className="contact-options">
        <h2>Any questions? <br /> Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>
        <div className="contact-buttons-horizontal">
          <div className="contact-card">
            <FontAwesomeIcon icon={faPhone} className="contact-icon purple" />
            <p>Still have questions?</p>
            <a href="/contact" className="purple-link">Contact us →</a>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faCommentDots} className="contact-icon green" />
            <p>Don't like phone calls?</p>
            <a href="/contact" className="green-link">Contact us →</a>
          </div>
        </div>
      </div>

      {/* Right Side: FAQ Accordion */}
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQSection;
