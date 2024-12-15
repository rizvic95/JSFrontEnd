import React from 'react';

function AppFeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-icon" />
      <div className="feature-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AppFeatureCard;

