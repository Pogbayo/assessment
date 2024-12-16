import React from "react";
import { Activity, Flight, flights, Hotel } from "../../data";

interface TripProps {
  selectedFlights: Flight[];
  selectedHotels: Hotel[];
  selectedActivities: Activity[];
  onRemoveFlight: (flightId: string) => void;
  onRemoveHotel: (hotelId: string) => void;
  onRemoveActivity: (activityId: string) => void;
  searchQuery: string;
}

const Trip: React.FC<TripProps> = ({
  selectedFlights = [],
  selectedHotels = [],
  selectedActivities = [],
  onRemoveFlight,
  onRemoveHotel,
  onRemoveActivity,
  searchQuery,
}) => {
  const filteredFlights = flights.filter(
    (flight) =>
      flight.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flight.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredFlights);
  return (
    <div className="r py-6 w-full border-2 container ">
      <strong className="flex items-center justify-center w-full">
        <b>FLIGHTS</b>
      </strong>
      <div className="flex mb-8 flex-col gap-6 max-h-[700px] overflow-y-auto p-4 bg-white rounded-lg shadow-lg w-full sm:w-[93%]">
        {selectedFlights.map((flight) => (
          <div
            key={flight.flightId}
            className="bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 w-full"
          >
            <h4 className="text-xl font-semibold text-blue-800 mb-2">
              {flight.airline}
            </h4>
            <p className="text-gray-600 mb-2">
              <strong>Route:</strong> {flight.from} to {flight.to}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Price:</strong> ₹{flight.price}
            </p>
            <button
              onClick={() => onRemoveFlight(flight.flightId)}
              className="py-1 px-3 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Remove Flight
            </button>
          </div>
        ))}
      </div>
      <strong className="flex items-center justify-center w-full">
        <b>HOTELS</b>
      </strong>{" "}
      <div className="flex mb-8  flex-col gap-6 max-h-[500px] overflow-y-auto p-4 bg-white rounded-lg shadow-lg w-full sm:w-[93%]">
        {selectedHotels.map((hotel) => (
          <div
            key={hotel.hotelId}
            className="bg-green-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 w-full"
          >
            <h4 className="text-xl font-semibold text-green-800 mb-2">
              {hotel.name}
            </h4>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {hotel.location}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Price per Night:</strong> ₹{hotel.pricePerNight}
            </p>
            <button
              onClick={() => onRemoveHotel(hotel.hotelId)}
              className="py-1 px-3 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Remove Hotel
            </button>
          </div>
        ))}
      </div>
      <strong className="flex items-center justify-center w-full">
        <b>ACTIVITIES</b>
      </strong>{" "}
      <div className="flex mb-4 flex-col gap-6 max-h-[500px] overflow-y-auto p-4 bg-white rounded-lg shadow-lg w-full sm:w-[93%]">
        {selectedActivities.map((activity) => (
          <div
            key={activity.activityId}
            className="bg-green-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 w-full"
          >
            <h4 className="text-xl font-semibold text-green-800 mb-2">
              {activity.name}
            </h4>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {activity.location}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Price per Night:</strong> ₹{activity.price}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Rating:</strong> ₹{activity.rating}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Description:</strong> {activity.description}
            </p>
            <button
              onClick={() => onRemoveActivity(activity.activityId)}
              className="py-1 px-3 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Remove Activity
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trip;
