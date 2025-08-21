import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-11-23T12:30:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <h1 className="title">🎉 VISHAL WEDS KOMAL 💍</h1>
      <h2 className="subtitle">विवाह मुहूर्त Tuk Tuk Tuk 🚗💨</h2>

      <div className="countdown">
        <div className="time-box bounce">
          <span>{timeLeft.days || "0"}</span>
          <p>Days</p>
        </div>
        <div className="time-box bounce">
          <span>{timeLeft.hours || "0"}</span>
          <p>Hours</p>
        </div>
        <div className="time-box bounce">
          <span>{timeLeft.minutes || "0"}</span>
          <p>Minutes</p>
        </div>
        <div className="time-box bounce">
          <span>{timeLeft.seconds || "0"}</span>
          <p>Seconds</p>
        </div>
      </div>

      <p className="footer">📅 Save the Date: 23rd Nov 2025, 12:30 PM</p>
    </div>
  );
};

export default App;
