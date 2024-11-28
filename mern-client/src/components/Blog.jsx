import React from "react";
import { HiOutlineSparkles, HiPencilAlt, HiTag } from "react-icons/hi";

const Blog = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-24 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-500 to-orange-600 opacity-50 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-lg font-semibold tracking-wide text-indigo-400">
            Discover Insights
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
            Welcome to Our Blog
          </h1>
          <p className="mt-6 text-xl leading-8">
            Stay inspired with our latest articles, tutorials, and trends. Your one-stop destination for fresh insights and expert advice.
          </p>
        </div>

        {/* Blog Highlights */}
        <div className="mt-20 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {/* Blog Card 1 */}
          <div className="relative flex flex-col p-8 bg-white text-gray-900 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
            <HiOutlineSparkles className="h-10 w-10 text-indigo-500 mb-6" />
            <h2 className="text-2xl font-bold">Informative Content</h2>
            <p className="mt-4">
              Explore articles that provide clear, detailed, and actionable insights on a variety of trending topics.
            </p>
            <div className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-indigo-500 rounded-full animate-ping"></div>
          </div>

          {/* Blog Card 2 */}
          <div className="relative flex flex-col p-8 bg-white text-gray-900 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
            <HiPencilAlt className="h-10 w-10 text-purple-500 mb-6" />
            <h2 className="text-2xl font-bold">Expert Writers</h2>
            <p className="mt-4">
              Gain knowledge from industry experts who bring experience and authority to their writings.
            </p>
            <div className="absolute top-[-15px] left-[-15px] w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
          </div>

          {/* Blog Card 3 */}
          <div className="relative flex flex-col p-8 bg-white text-gray-900 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
            <HiTag className="h-10 w-10 text-pink-500 mb-6" />
            <h2 className="text-2xl font-bold">Trending Topics</h2>
            <p className="mt-4">
              Stay up-to-date with articles that focus on emerging trends, helping you stay ahead in your domain.
            </p>
            <div className="absolute bottom-[-15px] right-[-15px] w-8 h-8 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Explore, Learn, and Stay Ahead
          </h2>
          <p className="mt-6 text-lg leading-8">
            Our blog is updated regularly with fresh content, offering the best resources to fuel your curiosity and growth.
          </p>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute bottom-[-100px] left-0 w-72 h-72 bg-gradient-to-br from-teal-400 to-blue-600 opacity-50 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-[-50px] right-0 w-64 h-64 bg-gradient-to-br from-red-400 to-yellow-600 opacity-50 rounded-full blur-2xl animate-pulse"></div>
    </div>
  );
};

export default Blog;
