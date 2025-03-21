import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Testimonial from "./components/Testimonial";
import Products from './components/Products';
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import CartProvider from "./context/CartContext";
function App() {
  return (
    <CartProvider>
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Testimonial/>
      <Footer/>
    </Router>
    </CartProvider>
  );
}


export default App;

