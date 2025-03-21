import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert(`Order placed successfully! Payment Method: ${paymentMethod}`);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.quantity} - ₹{item.price * item.quantity}
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
        <label>
          <input type="radio" value="online" checked={paymentMethod === "online"} onChange={() => setPaymentMethod("online")} />
          Online Payment (Coming Soon)
        </label>
      </div>

      <button className="btn btn-success" onClick={handlePayment}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
