import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [carPosition, setCarPosition] = useState(0);
  const [stripeOffset, setStripeOffset] = useState(0);
  const maxScroll = 80; // Adjust the limit for scroll
  const stripeCount = 10; // Number of road stripes to display

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Move the car while scrolling
      const newCarPosition = Math.min(scrollTop * 0.5, maxScroll);
      setCarPosition(newCarPosition);
    };

    // Move road stripes faster upward
    const moveStripes = () => {
      setStripeOffset((prevOffset) => prevOffset + 6); // Increased speed by incrementing faster
    };

    window.addEventListener("scroll", handleScroll);
    const stripeInterval = setInterval(moveStripes, 50); // Reduced interval for faster animation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(stripeInterval);
    };
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Road with moving stripes */}
      <div className="road">
        {Array.from({ length: stripeCount }).map((_, index) => (
          <div
            className="road-stripe"
            key={index}
            style={{
              top: `${index * 200}px`, // Space between stripes
              transform: `translateY(${-stripeOffset % 400}px)` // Faster upward movement
            }}
          ></div>
        ))}
      </div>

      {/* Car Container */}
      <div className="car-container">
        <img
          src="/car.png" // Replace with the actual path to your car image
          alt="Car"
          className="car"
          style={{
            transform: `translateY(${carPosition}px)`
          }}
        />
      </div>

      {/* Spacer to create scrolling space */}
      <div className="spacer">hi</div>

      {/* Parking Area */}
      <div className="parking-area">
      <div className="parking-slot">
    <div className="line"></div>
    <div className="line"></div>

  </div>

  {/* Center Parking Slot for Car */}
  <div className="parking-slot center-slot">

  </div>

  {/* Right Empty Parking Slots */}
  <div className="parking-slot">
    <div className="line"></div>
    <div className="line"></div>
  </div>

        <div className="gear-indicator">
          <span>P</span>
          <span>R</span>
          <span>N</span>
          <span>D</span>
        </div>
      </div>
    </div>
  );
}

export default App;
