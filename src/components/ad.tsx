import React, { useState } from "react";
import FlightBooking from "./flightbooking";
import { Flight, Activity, Hotel } from "../../data";

interface AdvertProps {
  searchQuery: string;
}

const FirstComp: React.FC<AdvertProps> = () => {
  const [selectedFlights, setSelectedFlights] = useState<Flight[]>([]);
  const [selectedHotels, setSelectedHotels] = useState<Hotel[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  const [isFlightModalOpen, setIsFlightModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);

  const handleAddFlight = (flight: Flight) => {
    setSelectedFlights((prev) => [...prev, flight]);
  };

  const handleAddHotel = (hotel: Hotel) => {
    setSelectedHotels((prev) => [...prev, hotel]);
  };

  const handleAddActivity = (activity: Activity) => {
    setSelectedActivities((prev) => [...prev, activity]);
  };

  const handleRemoveFlight = (flightId: string) => {
    setSelectedFlights((prev) =>
      prev.filter((flight) => flight.flightId !== flightId)
    );
  };

  const handleRemoveHotel = (hotelId: string) => {
    setSelectedHotels((prev) =>
      prev.filter((hotel) => hotel.hotelId !== hotelId)
    );
  };

  const handleRemoveActivity = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.filter((activity) => activity.activityId !== activityId)
    );
  };

  const handleAddFlightClick = () => setIsFlightModalOpen(true);

  const handleAddHotelClick = () => setIsHotelModalOpen(true);

  const handleAddActivityClick = () => setIsActivityModalOpen(true);

  return (
    <div className="relative h-auto mb-4 min-h-screen">
      <div className="relative">
        <div className="w-full h-96 bg-cover px-8 mt-6 bg-center sm:h-96 md:h-128 lg:h-160">
          <img
            src="/public/palm.jpg"
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
            <button
              onClick={handleAddFlightClick}
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Activities
            </button>
          </div>

          <div className="bg-blue-300 p-9 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Hotels</h3>
            <p className="mt-4 text-gray-600">
              Build, personalize and optimize your itineraries with our trip
              planner.
            </p>
            <button
              onClick={handleAddHotelClick}
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Hotels
            </button>
          </div>

          <div className="bg-blue-500 p-9 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-zinc-50 font-semibold">Flights</h3>
            <p className="mt-4 text-zinc-50">
              Build, personalize and optimize your itineraries with our trip
              planner.
            </p>
            <button
              onClick={handleAddActivityClick}
              className="mt-4 w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Flights
            </button>
          </div>
        </div>

        <div className="mt-7 bg-gray-100 sm:p-6 md:p-8">
          <FlightBooking
            selectedFlights={selectedFlights}
            selectedHotels={selectedHotels}
            selectedActivities={selectedActivities}
            handleAddFlight={handleAddFlight}
            handleAddHotel={handleAddHotel}
            handleAddActivity={handleAddActivity}
            handleRemoveFlight={handleRemoveFlight}
            handleRemoveHotel={handleRemoveHotel}
            handleRemoveActivity={handleRemoveActivity}
            isFlightModalOpen={isFlightModalOpen}
            isHotelModalOpen={isHotelModalOpen}
            isActivityModalOpen={isActivityModalOpen}
            setIsFlightModalOpen={setIsFlightModalOpen}
            setIsHotelModalOpen={setIsHotelModalOpen}
            setIsActivityModalOpen={setIsActivityModalOpen}
            searchQuery={""}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstComp;
