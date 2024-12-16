import React, { useState } from "react";
import { LuPlaneLanding } from "react-icons/lu";
interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center space-x-2">
          <LuPlaneLanding size={60} />
          <span className="text-xl font-semibold">Travel Platform</span>
        </div>

        <div className="flex-1 mx-8">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <input
              type="text"
              placeholder="Search for airline"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        </div>

        <div className="hidden md:flex items-center space-x-6">
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
            Commission for Me
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
          <div className="relative">
            <button className="relative">
              <span className="material-icons text-gray-600 hover:text-blue-500">
                notifications
              </span>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          <button className="relative">
            <span className="material-icons text-gray-600 hover:text-blue-500">
              shopping_cart
            </span>
          </button>
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
