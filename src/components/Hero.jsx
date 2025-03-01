import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/hero.css";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/slider/61.jpg",
      title: "Up to 50% Off Today Only",
      description: "Gold Standard Pre-Workout",
      promotion: "Starting at Ksh 768",
    },
    {
      id: 2,
      image:
        "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/slider/62.jpg",
      title: "Up to 50% Off Today Only",
      description: "Gold Standard Pre-Workout",
      promotion: "Starting at Ksh 768",
    },
  ];

  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="slide">
            <motion.div
              className="slide-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1>{slide.title}</h1>
              <h4>{slide.description}</h4>
              <p>{slide.promotion}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Shop Now
              </motion.button>
            </motion.div>
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="slide-image"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Hero;
