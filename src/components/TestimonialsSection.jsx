import React from "react";
import Quote from "./Quote";
import "./TestimonialsSection.css";
import avatar1 from "../images/avatar1.jpg"; // Replace with actual avatar path
import avatar2 from "../images/avatar2.jpg"; // Replace with actual avatar path

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <div className="testimonials-header">
          <h2>Clients are Loving Our App</h2>
        </div>
        <div className="testimonials-quotes">
          <Quote
            text="Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet."
            rating={4}
            name="Fannie Summers"
            title="Designer"
            avatar={avatar1}
          />
          <Quote
            text="Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc."
            rating={5}
            name="Albert Flores"
            title="Developer"
            avatar={avatar2}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
