import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      {/* Welcome Message */}
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8 tracking-wide animate__animated animate__fadeIn">
        Welcome to the Dashboard
      </h1>

      {/* Description of the Bookstore */}
      <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition-all duration-500 mb-12">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          <span className="font-semibold text-blue-600">Manage, edit,</span> and <span className="font-semibold text-blue-600">update</span> your books in a snap. This platform makes it simple for book lovers and authors alike to maintain and track their collections.
        </p>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          The <span className="font-semibold text-blue-600">Bookstore App</span> is the best place to discover new releases, manage your inventory, and keep up with your favorite books. Designed for simplicity, efficiency, and fun, it's here to make your experience smooth and effortless.
        </p>
        <p className="text-xl text-gray-700 font-semibold text-center">
          We’re thrilled to have you here. <span className="text-teal-600">Enjoy exploring and happy searching!</span>
        </p>
      </div>

      {/* Enhanced Card with Gradient */}
      <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-8 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl text-center font-semibold text-white">Explore the Best Collection of Books</h2>
        <p className="text-center text-white mt-4 text-base">
          Whether you're a bibliophile or a casual reader, we have something for everyone. From bestsellers to hidden gems, dive into a world of knowledge and imagination!
        </p>
      </div>

      
    </div>
  );
};

export default Dashboard;
