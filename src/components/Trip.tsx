import React from "react";
import { Activity, Flight, flights, Hotel } from "../../data";
import { LuPlaneLanding } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { MdEditRoad } from "react-icons/md";

interface TripProps {
  selectedFlights: Flight[];
  selectedHotels: Hotel[];
  selectedActivities: Activity[];
  onRemoveFlight: (flightId: string) => void;
  onRemoveHotel: (hotelId: string) => void;
  onRemoveActivity: (activityId: string) => void;
  searchQuery: string;
  handleAddFlightClick: () => void;
  handleAddHotelClick: () => void;
  handleAddActivityClick: () => void;
}

const Trip: React.FC<TripProps> = ({
  selectedFlights = [],
  selectedHotels = [],
  selectedActivities = [],
  onRemoveFlight,
  onRemoveHotel,
  onRemoveActivity,
  searchQuery,
  handleAddFlightClick,
  handleAddHotelClick,
  handleAddActivityClick,
}) => {
  const filteredFlights = flights.filter(
    (flight) =>
      flight.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flight.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredFlights);

  return (
    <div className="r py-6 w-full border-2 container">
      <strong className=" flex items-center w-full">
        <LuPlaneLanding size={40} />
        <b className="text-2xl ml-3">FLIGHTS</b>
      </strong>
      <div className="flex mb-8 mt-8 flex-col gap-6 max-h-[700px] overflow-y-auto p-4 bg-blue-950 rounded-lg shadow-lg w-full sm:w-[93%]">
        {selectedFlights.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <LuPlaneLanding size={40} />
            <p className="text-xl mt-4 font-semibold text-gray-600">
              No request yet
            </p>
            <button
              onClick={handleAddFlightClick}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Flight
            </button>
          </div>
        ) : (
          <div className="flight-card">
            {selectedFlights.map((flight) => (
              <div
                key={flight.flightId}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 w-full mb-4 border border-gray-200"
              >
                <h4 className="text-xl md:text-2xl font-bold text-blue-700 mb-2 flex justify-between items-center">
                  {flight.airline}
                  <span className="text-xs md:text-sm text-gray-500 font-normal">
                    {flight.flightStatus}
                  </span>
                </h4>

                <div className="mb-4">
                  <p className="text-sm md:text-base text-gray-800 font-medium">
                    <strong>From:</strong> {flight.from}
                  </p>
                  <p className="text-sm md:text-base text-gray-800 font-medium">
                    <strong>To:</strong> {flight.to}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center bg-blue-50 p-3 rounded-lg mb-4 space-y-2 md:space-y-0">
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500">
                      Departure
                    </p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {new Date(flight.departureTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500">Duration</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {flight.flightDuration}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500">Arrival</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {new Date(flight.arrivalTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 md:mb-6">
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">Price</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {flight.currency} ${flight.price}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">Stops</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {flight.stops}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">Class</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {flight.flightClass}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">
                      Seats Available
                    </p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {flight.seatAvailability}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs md:text-sm text-gray-500">
                      Baggage Allowance
                    </p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {flight.baggageAllowance}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs md:text-sm text-gray-500">
                      Aircraft Type
                    </p>
                    <p className="text-sm md:text-lg font-semibold text-gray-800">
                      {flight.aircraftType}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFlight(flight.flightId)}
                  className="w-full py-2 px-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Remove Flight
                </button>
              </div>
            ))}

            <style>{`
    @media (max-width: 768px) {
      .flight-card {
        padding: 1rem;
      }
      .flight-card h4 {
        font-size: 1.25rem;
      }
      .flight-card p {
        font-size: 0.875rem;
      }
      .flight-card .hidden {
        display: none !important;
      }
    }
  `}</style>
          </div>
        )}
      </div>

      <strong className="flex items-center w-full">
        <RiHotelLine size={40} />

        <b className="text-2xl ml-3">HOTELS</b>
      </strong>
      <div className="flex mt-8 mb-8 flex-col gap-6 max-h-[500px] overflow-y-auto p-4 bg-blue-300 rounded-lg shadow-lg w-full sm:w-[93%]">
        {selectedHotels.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <RiHotelLine size={40} />

            <p className="text-xl mt-4 font-semibold text-gray-600">
              No request yet
            </p>
            <button
              onClick={handleAddHotelClick}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Hotel
            </button>
          </div>
        ) : (
          <div className="hotel-cards">
            {selectedHotels.map((hotel) => (
              <div
                key={hotel.hotelId}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 w-full mb-4 border border-gray-200"
              >
                <div className="md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden mb-4 md:mb-0">
                  <img
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-2/3 pl-4">
                  <h4 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
                    {hotel.name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-800 mb-2">
                    <strong>Location:</strong> {hotel.location}
                  </p>
                  <p className="text-sm md:text-base text-gray-800 mb-4">
                    <strong>Price per Night:</strong> ${hotel.pricePerNight}
                  </p>

                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <p className="text-xs md:text-sm text-gray-500">Rating</p>
                      <p className="text-sm md:text-lg font-semibold text-gray-800">
                        {"★".repeat(hotel.rating)}
                      </p>
                    </div>
                    <div className="w-1/2 md:w-1/3">
                      <p className="text-xs md:text-sm text-gray-500">
                        Rooms Available
                      </p>
                      <p className="text-sm md:text-lg font-semibold text-gray-800">
                        {hotel.availableRooms}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <p className="text-xs md:text-sm text-gray-500">
                        Amenities
                      </p>
                      <p className="text-sm md:text-lg font-semibold text-gray-800">
                        {hotel.amenities.slice(0, 3).join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <p className="text-xs md:text-sm text-gray-500">
                        Check-in Time
                      </p>
                      <p className="text-sm md:text-lg font-semibold text-gray-800">
                        {hotel.checkInTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <p className="text-xs md:text-sm text-gray-500">
                        Check-out Time
                      </p>
                      <p className="text-sm md:text-lg font-semibold text-gray-800">
                        {hotel.checkOutTime}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveHotel(hotel.hotelId)}
                    className="w-full py-2 px-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Remove Hotel
                  </button>
                </div>
              </div>
            ))}

            <style>{`
    @media (max-width: 768px) {
      .hotel-cards {
        padding: 1rem;
      }
      .hotel-cards .flex {
        flex-direction: column;
      }
      .hotel-cards .md\:w-1\/3 {
        width: 100%;
      }
      .hotel-cards .md\:w-2\/3 {
        width: 100%;
        padding-left: 0; 
      }
      .hotel-cards img {
        width: 100%;
        height: auto;
      }
      .hotel-cards .w-1/2 {
        width: 100%; 
      }
      .hotel-cards p {
        font-size: 0.875rem; 
      }
      .hotel-cards .text-sm {
        font-size: 0.75rem; 
      }
      .hotel-cards .text-lg {
        font-size: 1rem; 
      }
      .hotel-cards .hidden {
        display: none !important;
      }
    }
  `}</style>
          </div>
        )}
      </div>

      <strong className="flex items-center  w-full">
        <MdEditRoad size={40} />
        <b className="text-2xl ml-3">ACTIVITIES</b>
      </strong>
      <div className="flex mb-4 mt-8 flex-col gap-6 max-h-[500px] overflow-y-auto p-4 bg-blue-600 rounded-lg shadow-lg w-full sm:w-[93%]">
        {selectedActivities.length === 0 ? (
          <div className="flex flex-col mt-4 items-center justify-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <FaRegFileAlt size={40} />

            <p className="text-xl font-semibold text-gray-600">
              No request yet
            </p>
            <button
              onClick={handleAddActivityClick}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Activity
            </button>
          </div>
        ) : (
          <div className="activity-cards">
            {selectedActivities.map((activity) => (
              <div
                key={activity.activityId}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 w-full mb-4 border border-gray-200"
              >
                <div className="md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden mb-4 md:mb-0">
                  <img
                    src={activity.img}
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-2/3 pl-4">
                  <h4 className="text-xl md:text-2xl font-bold text-green-800 mb-2">
                    {activity.name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-800 mb-2">
                    <strong>Location:</strong> {activity.location}
                  </p>
                  <p className="text-sm md:text-base text-gray-800 mb-4">
                    <strong>Price:</strong> ${activity.price}
                  </p>

                  <div className="flex flex-wrap mb-4">
                    <div className="w-1/2 md:w-1/3">
                      <p className="text-xs md:text-sm text-gray-500">Rating</p>
                      <p className="text-sm md:text-lg font-semibold text-gray-800">
                        {"★".repeat(Math.round(activity.rating))}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm md:text-base text-gray-500">
                      <strong>Description:</strong> {activity.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveActivity(activity.activityId)}
                    className="w-full py-2 px-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Remove Activity
                  </button>
                </div>
              </div>
            ))}

            <style>{`
    @media (max-width: 768px) {
      .activity-cards {
        padding: 1rem;
      }
      .activity-cards .flex {
        flex-direction: column;
      }
      .activity-cards .md\:w-1\/3 {
        width: 100%;
      }
      .activity-cards .md\:w-2\/3 {
        width: 100%;
        padding-left: 0; 
      }
      .activity-cards img {
        width: 100%;
        height: auto;
      }
      .activity-cards .w-1/2 {
        width: 100%; 
      }
      .activity-cards p {
        font-size: 0.875rem; 
      }
      .activity-cards .text-sm {
        font-size: 0.75rem; 
      }
      .activity-cards .text-lg {
        font-size: 1rem; 
      }
      .activity-cards .hidden {
        display: none !important;
      }
    }
  `}</style>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trip;
