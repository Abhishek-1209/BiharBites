import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero" >
      <div className="overlay"></div>
      <div className="container text-center">
        {/* Animated Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Premium Makhana from Bihar
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Fresh, crunchy, and full of nutrients. Experience the taste of tradition!
        </motion.p>

        {/* Animated Button */}
        <motion.a 
          href="/products" 
          className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Shop Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
