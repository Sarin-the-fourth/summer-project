import { useAdminStore } from "../../Store/useAdminStore";
import { useState } from "react";
import { toast } from "react-toastify";

const Managebike = () => {
  const { deletebike, updateBikeCondition } = useAdminStore();
  const [loading, setloading] = useState(false);
  const [bikeData, setbikeData] = useState({ bike_number: "", condition: "" });

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    if (!bikeData.bike_number || !bikeData.condition) {
      toast.error("Please provide bike number and condition.");
      return;
    }

    try {
      setloading(true);
      await updateBikeCondition(bikeData.bike_number, bikeData.condition);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log("Submitting bikeData:", bikeData);
    if (!bikeData.bike_number) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setloading(true);
    await deletebike(bikeData.bike_number);
    setloading(false);
  };

  return (
    <>
      {/* Toggle Condition */}
      <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg space-y-2 shadow-md w-full mb-5">
        <h1 className="font-bebas text-center text-white text-5xl mb-5">
          Bike Condition
        </h1>
        <label
          htmlFor="bike_number"
          className="text-white block font-montserrat font-bold mb-2"
        >
          Registration Number
        </label>
        <input
          type="text"
          id="bike_number"
          name="bike_number"
          value={bikeData.bike_number}
          onChange={(e) =>
            setbikeData((prev) => ({ ...prev, bike_number: e.target.value }))
          }
          className="p-2 focus:outline-none font-montserrat rounded block w-full bg-white text-black"
          required
        />

        <div>
          <label className="block text-md font-montserrat text-white  mb-1">
            Condition
          </label>
          <select
            value={bikeData.condition || ""}
            onChange={(e) =>
              setbikeData({ ...bikeData, condition: e.target.value })
            }
            className="w-full px-4 py-2 border font-montserrat border-gray-300 rounded-md focus:outline-none bg-white focus:font-montserrat focus:shadow-2xl"
          >
            <option value="">Select Condition</option>
            <option value="Excellent">Excellent</option>
            <option value="Running">Running</option>
            <option value="Needs Repair">Needs Repair</option>
          </select>
        </div>

        <div className="flex justify-end mt-5">
          <button
            onClick={handleSubmit1}
            disabled={loading}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? "Changing..." : "Done"}
          </button>
        </div>
      </div>

      {/* Delete Bike */}
      <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full mb-5">
        <h1 className="font-bebas text-center text-white text-5xl mb-5">
          Delete Bike
        </h1>
        <label
          htmlFor="bike_number"
          className="text-white block font-montserrat font-bold mb-2"
        >
          Enter Bike Number to Delete:
        </label>
        <input
          type="text"
          id="bike_number"
          name="bike_number"
          value={bikeData.bike_number}
          onChange={(e) =>
            setbikeData((prev) => ({ ...prev, bike_number: e.target.value }))
          }
          className="p-2 focus:outline-none font-montserrat rounded block w-full bg-white text-black"
          required
        />

        <div className="flex justify-end mt-5">
          <button
            onClick={handleSubmit2}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? "Deleting..." : "Delete Bike"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Managebike;
