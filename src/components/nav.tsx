// import React, { useState } from "react";
// import { LuPlaneLanding } from "react-icons/lu";
// interface NavbarProps {
//   onSearch: (query: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSearch(searchQuery);
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 flex justify-between items-center py-3">
//         <div className="flex items-center space-x-2">
//           <LuPlaneLanding size={60} />
//           <span className="text-xl font-semibold">Travel Platform</span>
//         </div>

//         <div className="flex-1 mx-8">
//           <form onSubmit={handleSearchSubmit} className="w-full">
//             <input
//               type="text"
//               placeholder="Search for airline"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </form>
//         </div>

//         <div className="hidden md:flex items-center space-x-6">
//           <a href="#" className="text-gray-600 hover:text-blue-500">
//             Home
//           </a>
//           <a href="#" className="text-gray-600 hover:text-blue-500">
//             Dashboard
//           </a>
//           <a href="#" className="text-gray-600 hover:text-blue-500">
//             Wallet
//           </a>

//           <a href="#" className="text-gray-600 hover:text-blue-500">
//             Commission for Me
//           </a>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//             Subscribe
//           </button>
//           <div className="relative">
//             <button className="relative">
//               <span className="material-icons text-gray-600 hover:text-blue-500">
//                 notifications
//               </span>
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                 3
//               </span>
//             </button>
//           </div>
//           <button className="relative">
//             <span className="material-icons text-gray-600 hover:text-blue-500">
//               shopping_cart
//             </span>
//           </button>
//           <button>
//             <span className="material-icons text-gray-600 hover:text-blue-500">
//               account_circle
//             </span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { LuPlaneLanding } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <LuPlaneLanding size={50} className="text-blue-600" />
          <span className="text-xl font-semibold  md:inline">
            Travel Platform
          </span>
        </div>

        {/* Search Bar - Hidden on Small Screens */}
        <div
          className={`flex-1 mx-8 hidden md:block ${
            isSidebarOpen ? "hidden" : "block"
          }`}
        >
          <input
            type="text"
            placeholder="Search for airline"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* Navigation Links for Desktop */}
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
            Commission
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>

        {/* Hamburger Menu (only visible on small screens) */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          <GiHamburgerMenu size={30} />
        </button>
      </div>

      {/* Sidebar (Visible on small screens only) */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        style={{ width: "250px" }}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-6 mt-8 px-4">Travel Planner</h2>
        <ul className="space-y-4 px-4">
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Activities
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Hotels
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Flights
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Study
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Visa
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Immigration
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Medical
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 block">
              Vacation Packages
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
