import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cart ,clearCart} = useContext(CartContext) || { cart: [] }; // Ensures cart is always an array
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();
  const totalAmount = cart.length > 0 
    ? cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    : 0;

  const handlePayment = () => {
    alert(`Order placed successfully! Payment Method: ${paymentMethod}`);
    clearCart();
    navigate("/#");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/products">Continue Shopping</a></p>
      ) : (
        <>
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <p key={item.id}>
                {item.name} x {item.quantity || 1} - ₹{item.price * (item.quantity || 1)}
              </p>
            ))}
            <h3>Total: ₹{totalAmount}</h3>
          </div>

          <div className="payment-method">
            <h3>Select Payment Method</h3>
            <label>
              <input type="radio" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
              Cash on Delivery
            </label>
            <label style={{ color: "grey", cursor: "not-allowed", opacity: 0.6 }}>
                <input type="radio" name="payment" value="online" disabled />
                 Online Payment (Coming Soon)
            </label>

          </div>

          <button className="btn btn-success" onClick={handlePayment}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
