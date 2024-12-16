import React, { useState } from "react";
import FlightBooking from "./flightbooking";
import { GiHamburgerMenu } from "react-icons/gi";

interface AdvertProps {
  searchQuery: string;
}

const FirstComp: React.FC<AdvertProps> = ({ searchQuery }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="relative h-auto mb-4 min-h-screen">
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white px-4 py-8 z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-6">Travel Planner</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-blue-500">
              Activities
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Hotels
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Flights
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Study
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Visa
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Immigration
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Medical
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Vacation Packages
            </a>
          </li>
        </ul>
      </div>

      <button
        onClick={toggleSidebar}
        className="m-3 z-40 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        {isSidebarOpen ? "Close Sidebar" : <GiHamburgerMenu />}
      </button>

      <div
        className={`relative transition-transform duration-300 ${
          isSidebarOpen ? "ml-[250px]" : "ml-0"
        }`}
      >
        <div className="w-full h-96 bg-cover px-8 mt-6 bg-center sm:h-96 md:h-128 lg:h-160">
          <img
            src="/pexels-samandgos-709552.jpg.crdownload"
            alt="Trip"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-8 flex justify-between text-gray-600 text-lg px-8 sm:px-6 md:px-8">
          <p>21 March 2024 to 21 April 2024</p>
          <img
            src="/wb.jpg"
            alt="Trip Image"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        <div className="mt-4 px-8 text-xl font-semibold sm:px-6 md:px-8">
          <p>Bahamas Family Trip</p>
          <p className="mt-2 text-gray-600">
            New York, United States of America: Solo Trip
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-8 sm:px-6 md:px-8">
          <div className="bg-blue-950 p-9 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-zinc-50 font-semibold">Activities</h3>
            <p className="mt-4 text-zinc-50">
              Build, personalize and optimize your itineraries with our trip
              planner.
            </p>
            <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add Activities
            </button>
          </div>

          <div className="bg-blue-300 p-9 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Hotels</h3>
            <p className="mt-4 text-gray-600">
              Build, personalize and optimize your itineraries with our trip
              planner.
            </p>
            <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add Hotels
            </button>
          </div>

          <div className="bg-blue-500 p-9 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-zinc-50 font-semibold">Flights</h3>
            <p className="mt-4 text-zinc-50">
              Build, personalize and optimize your itineraries with our trip
              planner.
            </p>
            <button className="mt-4 w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-600">
              Add Flights
            </button>
          </div>
        </div>

        <div className="mt-7 bg-gray-100 sm:p-6 md:p-8">
          <FlightBooking searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default FirstComp;
