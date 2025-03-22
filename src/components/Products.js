import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  {
    id: 1,
    name: "Classic Roasted Makhana",
    price: 1999,
    image: `${process.env.PUBLIC_URL}/assets/makhana1.jpg`,
  },
  {
    id: 2,
    name: "Peri Peri Flavored Makhana",
    price: 2099,
    image: `${process.env.PUBLIC_URL}/assets/makhana2.jpeg`,
  },
  {
    id: 3,
    name: "Tandoori Spiced Makhana",
    price: 1199,
    image: `${process.env.PUBLIC_URL}/assets/makhana3.jpg`,
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <section className="products">
      <h2>Our Premium Makhana</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* Toast Container (Placed at Root Level) */}
      <ToastContainer />
    </section>
  );
};

export default Products;
