import React, { useState } from "react";
import {
  flights,
  hotels,
  activities,
  Flight,
  Hotel,
  Activity,
} from "../../data";
import Trip from "./Trip";
import HotelModal from "./HotelModal";
import ActivitiesModal from "./ActivitiesModal";
import Modal from "./modal";

interface FlightBookingProps {
  searchQuery: string;
}
const FlightBooking: React.FC<FlightBookingProps> = ({ searchQuery }) => {
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
  const handleCloseFlightModal = () => setIsFlightModalOpen(false);

  const handleAddHotelClick = () => setIsHotelModalOpen(true);
  const handleCloseHotelModal = () => setIsHotelModalOpen(false);

  const handleAddActivityClick = () => setIsActivityModalOpen(true);
  const handleCloseActivityModal = () => setIsActivityModalOpen(false);

  return (
    <div className="container px-1  mx-auto ">
      <h2 className="text-2xl font-bold text-center mb-6">
        Select Your Flight, Hotel & Activities
      </h2>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleAddFlightClick}
          className="py-2 px-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Flight
        </button>
        <button
          onClick={handleAddHotelClick}
          className="py-2 px-2 bg-green-600 text-sm text-white rounded-lg hover:bg-green-700 transition-colors ml-4"
        >
          Add Hotel
        </button>
        <button
          onClick={handleAddActivityClick}
          className="py-2 px-2  bg-purple-600 text-sm text-white rounded-lg hover:bg-purple-700 transition-colors ml-4"
        >
          Add Activity
        </button>
      </div>

      {isFlightModalOpen && (
        <Modal
          flights={flights}
          onAddFlight={handleAddFlight}
          onClose={handleCloseFlightModal}
        />
      )}

      {isHotelModalOpen && (
        <HotelModal
          hotels={hotels}
          onAddHotel={handleAddHotel}
          onClose={handleCloseHotelModal}
        />
      )}

      {isActivityModalOpen && (
        <ActivitiesModal
          activities={activities}
          onAddActivity={handleAddActivity}
          onClose={handleCloseActivityModal}
        />
      )}

      <Trip
        searchQuery={searchQuery}
        selectedFlights={selectedFlights}
        selectedHotels={selectedHotels}
        selectedActivities={selectedActivities}
        onRemoveFlight={handleRemoveFlight}
        onRemoveHotel={handleRemoveHotel}
        onRemoveActivity={handleRemoveActivity}
      />
    </div>
  );
};

export default FlightBooking;
