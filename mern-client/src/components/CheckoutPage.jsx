import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setShowLogoutModal(true);
    setTimeout(() => {
      setShowLogoutModal(false);
      navigate("/login");
    }, 3000);
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  const totalAmount = cart
    .reduce((total, book) => total + parseFloat(book.price || 0), 0)
    .toFixed(2);

  return (
    <div className="mt-24 px-4 lg:px-24 min-h-screen relative">
      {/* Logout Button at Adjusted Position */}
      <div className="absolute top-4 right-16">
        <button
          onClick={handleLogout}
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12">Checkout</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              rows="4"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">Delivery Option</label>
            <select
              value={deliveryOption}
              onChange={(e) => setDeliveryOption(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Delivery Option</option>
              <option value="standard">Standard Delivery</option>
              <option value="express">Express Delivery</option>
            </select>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Items in Your Cart</h3>
            <ul className="space-y-2 mt-4">
              {cart.map((book, index) => (
                <li key={index} className="flex justify-between">
                  <span>{book.bookTitle}</span>
                  <span>${book.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between font-semibold text-lg text-gray-900">
              <span>Total:</span>
              <span>${totalAmount}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-200"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <p className="text-xl font-semibold text-green-600 mb-4">
              Successfully Logged Out
            </p>
            <p className="text-gray-700">Redirecting to login page...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
