import React, { useState } from "react";
import { Flight } from "../../data";

interface ModalProps {
  flights: Flight[];
  onAddFlight: (flight: Flight) => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ flights, onAddFlight, onClose }) => {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const handleFlightSelection = (flight: Flight) => {
    setSelectedFlight(flight);
  };

  const handleConfirmSelection = (flight: Flight) => {
    onAddFlight(flight);
    setSelectedFlight(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white p-8 rounded-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-1/2 h-[80vh] overflow-y-auto shadow-xl border border-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Select a Flight
        </h2>

        <div className="space-y-6">
          {flights.map((flight) => (
            <div
              key={flight.flightId}
              className={`p-6 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer ${
                selectedFlight?.flightId === flight.flightId
                  ? "border-4 border-green-500"
                  : ""
              }`}
              onClick={() => handleFlightSelection(flight)}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {flight.airline}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Route:</strong> {flight.from} to {flight.to}
              </p>
              <p className="text-gray-500 mb-2">
                <strong>Price:</strong> ${flight.price}
              </p>
              <p className="text-gray-500 mb-2">
                <strong>Departure:</strong>{" "}
                {new Date(flight.departureTime).toLocaleString()}
              </p>
              <p className="text-gray-500 mb-2">
                <strong>Arrival:</strong>{" "}
                {new Date(flight.arrivalTime).toLocaleString()}
              </p>
              <p className="text-gray-500 mb-4">
                <strong>Stops:</strong>{" "}
                {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop(s)`}
              </p>

              <button
                onClick={() => handleConfirmSelection(flight)}
                className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors "
              >
                Confirm Flight
              </button>
            </div>
          ))}
        </div>

        {selectedFlight && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Selected Flight:
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Airline:</strong> {selectedFlight.airline}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>From:</strong> {selectedFlight.from}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>To:</strong> {selectedFlight.to}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> ${selectedFlight.price}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Departure:</strong>{" "}
              {new Date(selectedFlight.departureTime).toLocaleString()}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Arrival:</strong>{" "}
              {new Date(selectedFlight.arrivalTime).toLocaleString()}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-between space-x-4">
          <button
            onClick={onClose}
            className="py-3 px-6 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
