import React, { useState, useEffect } from "react";
import "./App.css";

const Countdown = ({ targetDate, title, subtitle, styleType }) => {
  const calculateTimeLeft = () => {
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
  }, [targetDate]);

  return (
    <div className={`countdown-container ${styleType}`}>
      <h1 className="title">{title}</h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}

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
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      {/* Wedding Countdown */}
      <Countdown
        targetDate={new Date("2025-11-23T12:30:00")}
        title="🎉 VISHAL WEDS KOMAL 💍"
        subtitle="विवाह मुहूर्त 🚗💨"
        styleType="wedding"
      />

      {/* Bride & Groom — Dancing Animation */}
      <div className="wedding-stage dance">
        <div className="dancefloor" />
        <div className="character groom-dance" aria-label="Groom dancing">🤵‍♂️</div>
        <div className="character bride-dance" aria-label="Bride dancing">👰‍♀️</div>
      </div>


      {/* DJ Night Countdown */}
      <Countdown
        targetDate={new Date("2025-11-22T19:00:00")}
        title="🎶 DJ NIGHT (बिलोरा) With 'MOHIT' 🎉"
        subtitle="Dance • Music • Masti 🕺💃🕺💃🕺💃🕺"
        styleType="dj-night"
      />

      <p className="footer">📅 Save the Date: 22nd & 23rd Nov 2025</p>
    </div>
  );
};

export default App;
