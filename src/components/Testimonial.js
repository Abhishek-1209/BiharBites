import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Aditya Tiwari",
    text: "Absolutely loved the taste! The best Makhana I’ve ever had.",
    image: "/BiharBites/assets/customer1.jpg", // Absolute path for GitHub Pages
  },
  {
    name: "Chetu",
    text: "Super fresh and crunchy. Perfect for a healthy snack!",
    image: "/BiharBites/assets/customer2.jpg", // Absolute path for GitHub Pages
  },
  {
    name: "Abhishek Dalmil",
    text: "Premium quality and great packaging. Highly recommended!",
    image: "/BiharBites/assets/customer3.jpg", // Absolute path for GitHub Pages
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">"{item.text}"</p>
            <div className="customer">
              <img src={item.image} alt={item.name} /> {/* Corrected src */}
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
