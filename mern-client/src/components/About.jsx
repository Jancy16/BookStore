import React from "react";
import { HiOutlineBookOpen, HiPencilAlt, HiUserCircle } from "react-icons/hi";

const About = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-700 via-purple-500 to-indigo-600 text-white py-24 sm:py-32 overflow-hidden">
      {/* Floating Balls for Aesthetics */}
      <div className="absolute top-10 left-5 w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-10 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-red-500 to-orange-400 rounded-full animate-bounce"></div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Welcome to Our Bookstore!
          </h1>
          <p className="mt-6 text-lg leading-8">
            A digital space where you can explore, manage, and enjoy books effortlessly. Whether you're a reader or a manager, our platform caters to your needs with style and simplicity.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col items-center p-8 rounded-lg bg-white text-gray-800 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform">
            <HiUserCircle className="h-16 w-16 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold">User Login</h3>
            <p className="mt-4 text-center">
              Create your account to access personalized features and manage your favorite books.
            </p>
            <div className="absolute top-[-10px] right-[-10px] w-8 h-8 bg-blue-300 rounded-full animate-ping"></div>
          </div>

          <div className="relative flex flex-col items-center p-8 rounded-lg bg-white text-gray-800 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform">
            <HiPencilAlt className="h-16 w-16 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold">Manage Your Books</h3>
            <p className="mt-4 text-center">
              Add, update, or organize your collection effortlessly. Tailor your library to fit your needs.
            </p>
            <div className="absolute bottom-[-10px] left-[-10px] w-10 h-10 bg-purple-300 rounded-full animate-pulse"></div>
          </div>

          <div className="relative flex flex-col items-center p-8 rounded-lg bg-white text-gray-800 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform">
            <HiOutlineBookOpen className="h-16 w-16 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold">Explore Books</h3>
            <p className="mt-4 text-center">
              Dive into a curated selection of books and read detailed descriptions to find your next favorite.
            </p>
            <div className="absolute top-[-10px] left-[-10px] w-6 h-6 bg-red-300 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Empowering Book Lovers and Managers Alike
          </h2>
          <p className="mt-6 text-lg leading-8">
            Whether you're here to organize your collection or explore new reads, our platform provides the tools and features to make it seamless and enjoyable.
          </p>
        </div>
      </div>

      {/* Additional Floating Balls at the Bottom */}
      <div className="absolute bottom-[-50px] right-5 w-20 h-20 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-ping"></div>
      <div className="absolute bottom-0 left-40 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default About;
