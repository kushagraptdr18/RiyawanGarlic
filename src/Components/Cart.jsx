import React, { useEffect, useState } from "react";
import Navbar from "./Home/Navbar";
import axiosInstance from "./utils/axiosInstance";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);

  // Fetch cart items from API
  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/cart");
      console.log(response);
      
      setCartItems(response.data || []); // Ensure cartItems is always an array
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle quantity increase
  const handleIncrease = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle quantity decrease
  const handleDecrease = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle item removal
  const handleRemove = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Handle placing an order (this should ideally be linked to another API call)
  const handlePlaceOrder = async () => {
    try {
      await axiosInstance.post("/order", { items: cartItems });
      alert("Order placed successfully!");
      setCartItems([]); // Clear the cart after order
    } catch (error) {
      console.error("Error placing the order:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // Calculate total price
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="container mb-10">
      <Navbar />
      <div className="grid grid-cols-3 gap-10">
        {/* Left side: Cart items list */}
        <div className="col-span-2">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                {/* Product Image */}
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-20 h-20 object-cover mr-4"
                />
                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold">{item.productName}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right side: Price Summary */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-lg">Price Details</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <p>{item.productName}</p>
              <p>
                ${item.price} x {item.quantity}
              </p>
            </div>
          ))}
          <div className="flex justify-between py-2 border-t border-b mt-2">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
