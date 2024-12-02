// src/components/Cart.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import App from "../App";
// import img31 from "/src/assets/img15.jpeg";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Black Polo", price: 29.99, quantity: 1 },
    { id: 2, name: "Vintage Polo", price: 49.99, quantity: 2 },
    {
      id: 3,
      name: "White Shirt",
      price: 49.99,
      quantity: 2,
    },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* <img src={img31} alt="" /> */}
      <div className="container mx-auto p-4" id="cart">
        <h1 className="text-2xl font-bold mb-4 text-slate-500 m-[10px] ">
          Shopping Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="lg:col-span-1">
            <CartSummary cartItems={cartItems} />
            <button
              className="w-full bg-slate-500 text-white py-2 mt-4 rounded hover:bg-slate-400 transition-all"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
            <button className="w-full bg-slate-500 text-white py-2 mt-4 rounded hover:bg-slate-400 transition-all">
              Add Items to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
