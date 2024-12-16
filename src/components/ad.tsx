import React, { useState } from "react";
import FlightBooking from "./flightbooking";

interface AdvertProps {
  searchQuery: string;
}

const FirstComp: React.FC<AdvertProps> = ({ searchQuery }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="relative h-auto mb-4 ">
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
        className="m-3 left-4 z-40 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <div
        className={`relative  transition-transform duration-300 ${
          isSidebarOpen ? "opacity-50" : "opacity-100"
        }`}
        style={{ marginTop: isSidebarOpen ? "250px" : "0" }}
      >
        <div
          className="w-200  h-64 bg-cover bg-center sm:h-96 md:h-128 lg:h-160"
          style={{
            backgroundImage: "",
          }}
        >
          <img
            src="/pexels-samandgos-709552.jpg.crdownload"
            alt="Trip"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-8 text-gray-600 text-lg px-8 sm:px-6 md:px-8">
          <p>21 March 2024 to 21 April 2024</p>
        </div>
        <div className="mt-4 px-8 text-xl font-semibold sm:px-6 md:px-8">
          <p>Bahamas Family Trip</p>
          <p className="mt-2 text-gray-600">
            New York, United States of America: Solo Trip
          </p>
        </div>

        <div className="mt-8 flex w-full items-center justify-between px-3 sm:px-6 md:px-8">
          {/* Three Boxes */}
          <div className="grid min-w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {/* Activities Box */}
            <div className="bg-white min-w-full p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">Activities</h3>
              <p className="mt-4 text-gray-600">
                Build, personalize and optimize your itineraries with our trip
                planner.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add Activities
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">Hotels</h3>
              <p className="mt-4 text-gray-600">
                Build, personalize and optimize your itineraries with our trip
                planner.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add Hotels
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">Flights</h3>
              <p className="mt-4 text-gray-600">
                Build, personalize and optimize your itineraries with our trip
                planner.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add Flights
              </button>
            </div>
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
