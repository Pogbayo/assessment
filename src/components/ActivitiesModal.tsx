import React from "react";
import { Activity } from "../../data";

interface ActivitiesModalProps {
  activities: Activity[];
  onAddActivity: (activity: Activity) => void;
  onClose: () => void;
}

const ActivitiesModal: React.FC<ActivitiesModalProps> = ({
  activities,
  onAddActivity,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-1/2 h-[80vh] overflow-y-auto shadow-xl border border-gray-300">
        <div className="flex w-full mb-6 justify-between items-center bg-white py-4">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Select an Activity
          </h3>
          <button
            onClick={onClose}
            className="py-2 px-3 sm:px-4 sm:py-2 bg-red-400 text-sm sm:text-base text-white rounded-md hover:bg-gray-500 transition-colors"
          >
            Close Modal
          </button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.activityId}
              className="flex justify-between items-center p-2 border-b"
            >
              <div>
                <h4 className="font-semibold">{activity.name}</h4>
                <p className="text-gray-600">Location: {activity.location}</p>
                <p className="text-gray-500">Price: ₹{activity.price}</p>
                <p className="text-gray-500">Rating: {activity.rating} / 5</p>
              </div>
              <button
                onClick={() => onAddActivity(activity)}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-sm sm:text-base text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Select
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="py-2 px-3 sm:px-4 bg-red-400 text-sm sm:text-base text-white rounded-md hover:bg-gray-500 transition-colors"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesModal;
