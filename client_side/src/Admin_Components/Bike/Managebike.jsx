import { useAdminStore } from "../../Store/useAdminStore";
import { useState } from "react";
import { toast } from "react-toastify";

const Managebike = () => {
  const { deletebike } = useAdminStore();
  const [loading, setloading] = useState(false);
  const [bikeData, setbikeData] = useState({ bike_number: "" });

  const handleSubmit = async (e) => {
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
      <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full mb-5"></div>

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
            onClick={handleSubmit}
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
