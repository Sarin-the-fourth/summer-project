import { useEffect, useState } from "react";
import { useAdminStore } from "../../Store/useAdminStore";

const DeleteTour = () => {
  const { fetchAllTours, tour, deleteTour } = useAdminStore();
  const [selectedTourId, setselectedTourId] = useState("");

  useEffect(() => {
    fetchAllTours();
  }, []);

  const handleSubmit = async () => {
    const alertwindow = window.confirm(
      "Are you sure you want to delete the Tour?"
    );
    if (!alertwindow) return;
    await deleteTour(selectedTourId);
    console.log("Tour Deleted: ", selectedTourId);
  };
  return (
    <>
      <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full ">
        <h2 className="text-5xl text-center font-bebas font-bold text-white mb-6">
          Delete Tour
        </h2>
        <div className="space-y-5">
          <label className="block text-md font-montserrat text-white mb-1">
            Select Tour
          </label>
          <select
            value={selectedTourId}
            onChange={(e) => {
              setselectedTourId(e.target.value);
            }}
            className="w-full px-4 py-2 border font-montserrat border-gray-300 rounded-md focus:outline-none bg-white focus:font-montserrat focus:shadow-2xl"
          >
            <option value="">Select a Tour</option>
            {tour.map((t) => (
              <option key={t._id} value={t._id}>
                {t?.name}
              </option>
            ))}
          </select>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-red-600 text-md font-montserrat text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:bg-red-500 "
            >
              Delete Tour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteTour;
