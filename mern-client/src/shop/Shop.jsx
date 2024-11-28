import React, { useEffect } from 'react';
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Shop = () => {
  const [books, setBooks] = React.useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => {
        // Remove book at index 2 if the array has at least 3 books
        const filteredData = data.length > 2 ? data.filter((_, index) => index !== 2) : data;
        setBooks(filteredData);
      })
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  const handleBuyNow = () => {
    // Redirect to user login page
    navigate("/user-login");
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map((book, index) => (
          <Card key={index}>
            <img src={book.imageURL} alt={book.bookTitle} className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button 
              onClick={handleBuyNow} 
              className="bg-blue-700 font-semibold text-white py-2 rounded">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
