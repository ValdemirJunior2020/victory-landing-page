import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setZoomIn(true), 500); // Add delay for zoom effect
  }, []);

  return (
    <div
      className={`landing-container ${zoomIn ? "zoom-in" : ""}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/church-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Victory Worship Center</h1>
        <p className="address">1915 N A St, Lake Worth Beach, FL 33460</p>
        <p className="phone">Phone: (561) 585-0130</p>

        <div className="hours">
          <h2>Hours</h2>
          <p><strong>Tuesday:</strong> 7 PM – 12 AM</p>
          <p><strong>Wednesday:</strong> Closed</p>
          <p><strong>Thursday:</strong> Closed</p>
          <p><strong>Friday:</strong> Closed</p>
          <p><strong>Saturday:</strong> Closed</p>
          <p><strong>Sunday:</strong> 10 AM – 12 PM</p>
          <p><strong>Monday:</strong> Closed</p>
        </div>

        <a href="https://victory2-0.netlify.app/" className="visit-button">
          Visit Main Website
        </a>
      </div>
    </div>
  );
}

export default App;
