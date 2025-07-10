import { useEffect, useState } from "react";
import { useAdminStore } from "../../Store/useAdminStore";
import { toast } from "react-toastify";

const EditItinerary = () => {
  const [selectedtourId, setselectedtourId] = useState("");
  const [loading, setloading] = useState(false);
  const [daysCount, setDaysCount] = useState(0);
  const { fetchAllTours, tour, updateItinerary } = useAdminStore();
  const [selectedDay, setselectedDay] = useState("");
  const [formData, setformData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    fetchAllTours();
  }, []);

  const handleSubmit = async () => {
    if (
      !selectedtourId ||
      !selectedDay ||
      !formData.title ||
      !formData.description
    ) {
      toast.error("Please fill out all the fields");
      return;
    }
    setloading(true);
    try {
      await updateItinerary(selectedtourId, selectedDay, formData);
      console.log(
        `Selected tour: ${selectedtourId}, Day selected: ${selectedDay}, Form: ${JSON.stringify(
          formData
        )}`
      );
    } catch (error) {
      console.error("Error updating itinerary: ", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full ">
        <h1 className="text-5xl text-center font-bebas font-bold text-white mb-6">
          Edit Itinerary
        </h1>

        <div className="space-y-4">
          <label className="block text-md font-montserrat text-white mb-1">
            Select Tour:
          </label>
          <select
            value={selectedtourId}
            onChange={(e) => {
              const selectedId = e.target.value;
              setselectedtourId(selectedId);
              const selected = tour.find((t) => t._id === selectedId);
              setDaysCount(selected?.numberofdays || 0);
              console.log("selected tour: ", selected);
            }}
            className="w-full px-4 py-2 border font-montserrat border-gray-300 rounded-md focus:outline-none bg-white focus:font-montserrat focus:shadow-2xl"
          >
            <option value="">Select a Tour</option>
            {tour.map((t) => (
              <option key={t._id} value={t._id}>
                {t.name}
              </option>
            ))}
          </select>

          <label className="block text-md font-montserrat text-white mb-1">
            Select Day:
          </label>
          <select
            value={selectedDay}
            onChange={(e) => {
              setselectedDay(e.target.value);
            }}
            className="w-full px-4 py-2 border font-montserrat border-gray-300 rounded-md focus:outline-none bg-white focus:font-montserrat focus:shadow-2xl"
          >
            <option value="">Select Day</option>
            {Array.from({ length: daysCount }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Day {i + 1}
              </option>
            ))}
          </select>

          {[
            { label: "Title", key: "title", type: "text" },
            { label: "Description", key: "description", type: "textarea" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="block text-md font-montserrat text-white mb-1">
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  value={formData[key]}
                  onChange={(e) =>
                    setformData({ ...formData, [key]: e.target.value })
                  }
                  className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:border-2"
                  rows="3"
                />
              ) : (
                <input
                  value={formData[key]}
                  onChange={(e) =>
                    setformData({ ...formData, [key]: e.target.value })
                  }
                  className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:shadow-2xl"
                />
              )}
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-600 hover:bg-[#fdb913]"
              } text-md font-montserrat text-white px-6 py-2 rounded-md transition-colors duration-200 focus:outline-none`}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditItinerary;
