import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  // Fetch data for the selected book
  const { _id, bookTitle, imageURL, bookDescription } = useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-col items-center">
      {/* Book Image */}
      <img
        src={imageURL}
        alt={bookTitle}
        className="h-96 w-full object-contain mb-8 rounded-lg shadow-md"
      />

      {/* Book Title */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        {bookTitle}
      </h1>

      {/* Book Description */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          About This Book
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {bookDescription}
        </p>
      </div>
    </div>
  );
};

export default SingleBook;
