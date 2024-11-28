import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const getRandomPrice = () => (Math.random() * (50 - 5) + 5).toFixed(2);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        const booksWithPrices = data.map((book) => ({
          ...book,
          price: getRandomPrice(),
        }));
        setBooks(booksWithPrices);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleAddToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const handleRemoveFromCart = (bookToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((book) => book.bookTitle !== bookToRemove.bookTitle)
    );
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

  return (
    <div className="mt-24 px-4 lg:px-24 min-h-screen">
      <div className="text-right mb-4">
        <button
          onClick={handleLogout}
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12">Explore Books</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book, index) => (
          <Card
            key={index}
            className="transition-all transform hover:scale-105 shadow-lg rounded-lg"
          >
            <img
              src={book.imageURL}
              alt={book.bookTitle}
              className="h-40 w-40 object-cover rounded-lg mb-4 mx-auto"
            />
            <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 text-center">${book.price}</p>

            <button
              onClick={() => handleAddToCart(book)}
              className="mt-4 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-200 w-full"
            >
              Add to Cart
            </button>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-white shadow-xl p-8 rounded-2xl border-2 border-gray-400">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h3>

        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((book, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3 mb-3"
              >
                <div className="text-gray-800 font-semibold">{book.bookTitle}</div>
                <div className="flex items-center">
                  <div className="text-gray-600">${book.price}</div>
                  <button
                    onClick={() => handleRemoveFromCart(book)}
                    className="ml-4 text-red-600 hover:text-red-800 transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-xl font-semibold text-gray-900">
              <span>Total:</span>
              <span>
                $
                {cart
                  .reduce((total, book) => total + parseFloat(book.price), 0)
                  .toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty. Add some books to your cart!</p>
        )}
      </div>

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

export default UserDashboard;
