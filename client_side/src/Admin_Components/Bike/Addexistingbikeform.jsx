import { useState } from "react";
import { useAdminStore } from "../../Store/useAdminStore";

const AddExistingBikeForm = () => {
  const [bikeData, setBikeData] = useState({
    bike_number: "",
    bike_model: "",
    condition: "",
  });

  const { addBike, loadingAddBike } = useAdminStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bikeData.bike_number || !bikeData.bike_model || !bikeData.condition) {
      alert("Please fill in all fields.");
      return;
    }
    await addBike(bikeData);
    setBikeData({
      bike_number: "",
      bike_model: "",
      condition: "",
    });
  };

  return (
    <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full">
      <h2 className="text-5xl font-bebas text-white mb-4 text-center">
        Add Bike of Existing Model
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white font-montserrat mb-1">
            Registration Number
          </label>
          <input
            type="text"
            value={bikeData.bike_number}
            onChange={(e) =>
              setBikeData({ ...bikeData, bike_number: e.target.value })
            }
            className="w-full bg-white font-montserrat hover:outline-none outline-none px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-white font-montserrat mb-1">Model</label>
          <input
            type="text"
            value={bikeData.bike_model}
            onChange={(e) =>
              setBikeData({ ...bikeData, bike_model: e.target.value })
            }
            className="w-full bg-white font-montserrat hover:outline-none outline-none px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-white font-montserrat mb-1">
            Condition
          </label>
          <select
            value={bikeData.condition}
            onChange={(e) =>
              setBikeData({ ...bikeData, condition: e.target.value })
            }
            className="w-full bg-white font-montserrat hover:outline-none outline-none px-4 py-2 rounded"
            required
          >
            <option value="">Select Condition</option>
            <option value="Excellent">Excellent</option>
            <option value="Running">Running</option>
            <option value="Needs Repair">Needs Repair</option>
          </select>
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-gray-600 text-md font-montserrat text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:bg-gray-500 "
          >
            {loadingAddBike ? "Adding..." : "Add Bike"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExistingBikeForm;
