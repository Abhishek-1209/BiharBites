import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Classic Roasted Makhana",
    price: 199,
    image: "makhana1.jpg",
  },
  {
    id: 2,
    name: "Peri Peri Flavored Makhana",
    price: 249,
    image: "makhana2.jpeg",
  },
  {
    id: 3,
    name: "Tandoori Spiced Makhana",
    price: 229,
    image: "makhana3.jpg",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Our Premium Makhana</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={`/assets/${product.image}`} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
