import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">Travel Platform</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Search for destinations, flights, hotels..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Dashboard
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Wallet
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Plan a Trip
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Commission for Me
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
          <div className="relative">
            {/* Notification Icon */}
            <button className="relative">
              <span className="material-icons text-gray-600 hover:text-blue-500">
                notifications
              </span>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          {/* Cart Icon */}
          <button className="relative">
            <span className="material-icons text-gray-600 hover:text-blue-500">
              shopping_cart
            </span>
          </button>
          {/* Profile Icon */}
          <button>
            <span className="material-icons text-gray-600 hover:text-blue-500">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
