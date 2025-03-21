import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Cart Icon
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext) || { cart: [] };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYNBMu8gEmlbEhT-hyzrTjKIyTbEPc9PrOA&s" alt="BiharBites Logo" className="logo" />
        <h1>BiharBites</h1>
      </div>

      {/* Navigation Links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

        {/* Cart Icon with Counter */}
        <li className="cart-icon">
        <Link to="/cart" className="cart-link">
         <FaShoppingCart size={22} />
             <span className="cart-count">{cart?.length || 0}</span>
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
