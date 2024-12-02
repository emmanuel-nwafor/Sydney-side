// src/components/CartSummary.js
import React from "react";

function CartSummary({ cartItems }) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <p className="text-gray-600">Total Items: {cartItems.length}</p>
      <p className="text-gray-600">Total Cost: ${total.toFixed(2)}</p>
    </div>
  );
}

export default CartSummary;
