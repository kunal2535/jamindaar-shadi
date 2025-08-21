import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

//const targetDate = new Date("2025-11-22T12:30:00");
const targetDate = new Date("2025-11-23T12:30:00+05:30");

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [animateKey, setAnimateKey] = useState(0);

  function getTimeRemaining() {
    const now = new Date();
    const total = targetDate - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
      setAnimateKey((prev) => prev + 1); // trigger animation on each tick
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <div className="end-screen">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          🎉 JAMINDAAR KI SHADI SHURU! 🎉
        </motion.h1>
        <p>Baraat aa gayi hai! 💃🕺</p>
      </div>
    );
  }

  return (
    <div className="container">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="title"
      >
        विवाह मुहूर्त 
      </motion.h1>

      <motion.div
        className="countdown"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <TimeBox label="Days" value={timeLeft.days} animateKey={animateKey} />
        <TimeBox label="Hours" value={timeLeft.hours} animateKey={animateKey} />
        <TimeBox label="Minutes" value={timeLeft.minutes} animateKey={animateKey} />
        <TimeBox label="Seconds" value={timeLeft.seconds} animateKey={animateKey} />
      </motion.div>

      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="tagline"
      >
        Tuk Tuk Tuk Tuk... Shaadi ki ghadi nikal rahi hai! 💖
      </motion.p> */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="title"
      >
        VISHAL ❤️ KOMAL📡💍
      </motion.h1>

    </div>
  );
}

const TimeBox = ({ label, value, animateKey }) => (
  <div className="time-box">
    <div key={animateKey} className="time-value animate-flip">
      {value}
    </div>
    <div className="time-label">{label}</div>
  </div>
);

export default App;
