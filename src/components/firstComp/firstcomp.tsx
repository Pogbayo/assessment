import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white h-screen px-4 py-8">
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

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Image Section */}
        <div
          className="w-full h-400px bg-cover bg-center"
          style={{ backgroundImage: "url('/your-image.jpg')" }}
        ></div>

        {/* Date Range */}
        <div className="mt-8 text-gray-600 text-lg">
          21 March 2024 to 21 April 2024
        </div>

        {/* Trip Descriptions */}
        <div className="mt-4 text-xl font-semibold">
          <p>Bahamas Family Trip</p>
          <p className="mt-2 text-gray-600">
            New York, United States of America: Solo Trip
          </p>
        </div>

        {/* Three Boxes Section */}
        <div className="mt-8 grid grid-cols-3 gap-8">
          {/* Activities Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Activities</h3>
            <p className="mt-4 text-gray-600">
              Build, personalize and optimize your itineraries with our trip
              planner.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add Activities
            </button>
          </div>

          {/* Hotels Box */}
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

          {/* Flights Box */}
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

        {/* Profile Image */}
        <div className="mt-8 text-center">
          <img
            src="/profile-pic.jpg" // Add your profile image path here
            alt="Profile"
            className="w-16 h-16 rounded-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
