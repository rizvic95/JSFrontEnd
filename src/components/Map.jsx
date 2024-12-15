import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map">
      <h2>Find Us Here</h2>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
