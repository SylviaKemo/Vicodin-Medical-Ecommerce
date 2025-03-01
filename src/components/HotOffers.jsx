import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/hotOffers.css";

const HotOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: true,
    margin: "-100px",
  });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 24); // 24-hour countdown

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="hot-offers-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="hot-offers-content">
        <motion.h2
          className="hot-offers-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Todays Hot Offer
        </motion.h2>
        <p className="hot-offers-subheading">
          Buy all your medicines at 50% offer.
        </p>
        <p className="discount-text">
          Get extra cashback with great deals and discounts
        </p>
        <div className="countdown">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <motion.div
              key={unit}
              className="time-box"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>{timeLeft[unit]}</span>
              <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </motion.div>
          ))}
        </div>
        <div className="buttons">
          <motion.button
            className="shop-now"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Shop Now
          </motion.button>
          <motion.button
            className="deal-of-day"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Deal of the Day
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HotOffers;
