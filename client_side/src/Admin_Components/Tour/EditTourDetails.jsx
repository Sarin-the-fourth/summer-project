import { useEffect } from "react";
import { useAdminStore } from "../../Store/useAdminStore";
import { useState } from "react";

const EditTourDetails = () => {
  const { fetchAllTours, tour, updateTour } = useAdminStore();

  const [selectedTourId, setselectedTourId] = useState("");

  const [formData, setformData] = useState({
    name: "",
    introduction: "",
    description: "",
    price: "",
    recommended_bikes: "",
    includes: "",
    excludes: "",
    availability: "",
  });

  const handleSubmit = async () => {
    if (!selectedTourId) {
      alert("Please select a tour to update.");
      return;
    }
    await updateTour(selectedTourId, formData);
    console.log("Update Data: ", formData);
  };

  useEffect(() => {
    fetchAllTours();
  }, []);
  return (
    <>
      <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full ">
        <h2 className="text-5xl text-center font-bebas font-bold text-white mb-6">
          Edit Tour Details
        </h2>

        <div className="space-y-4">
          <label className="block text-md font-montserrat text-white mb-1">
            Select a Tour
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

          {[
            { label: "Tour Name", key: "name", type: "text" },
            { label: "Introduction", key: "introduction", type: "textarea" },
            { label: "Description", key: "description", type: "textarea" },
            { label: "Price", key: "price", type: "number" },
            {
              label: "Recommended Bikes",
              key: "recommended_bikes",
              type: "text",
            },
            { label: "Includes", key: "includes", type: "textarea" },
            { label: "Excludes", key: "excludes", type: "textarea" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="block text-md font-montserrat text-white mb-1">
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  value={formData[key]}
                  onChange={(e) => {
                    const value = e.target.value;
                    setformData((prev) => {
                      const newData = { ...prev };
                      if (value === "") {
                        delete newData[key];
                      } else {
                        newData[key] = value;
                      }
                      return newData;
                    });
                  }}
                  className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:border-2"
                  rows="3"
                ></textarea>
              ) : (
                <input
                  type={type}
                  {...(type === "number" ? { min: "0" } : {})}
                  value={formData[key]}
                  onChange={(e) => {
                    const value =
                      type === "number"
                        ? Number(e.target.value)
                        : e.target.value;
                    if (type === "number" && value < 0) return;
                    setformData((prev) => {
                      const newData = { ...prev };
                      if (value === "") {
                        delete newData[key];
                      } else {
                        newData[key] = value;
                      }
                      return newData;
                    });
                  }}
                  className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:shadow-2xl"
                />
              )}
            </div>
          ))}
          <div>
            <label className="block text-md font-montserrat text-white mb-1">
              Availability
            </label>
            <select
              value={formData.availability ?? ""}
              onChange={(e) =>
                setformData((prev) => ({
                  ...prev,
                  availability: e.target.value === "true",
                }))
              }
              className="w-full px-4 py-2 border font-montserrat border-gray-300 rounded-md focus:outline-none bg-white focus:font-montserrat focus:shadow-2xl"
            >
              <option value="">Select availability</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
          <div className="flex justify-end pt-2">
            <button
              onClick={handleSubmit}
              className="bg-gray-600 text-md font-montserrat text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:bg-gray-500 "
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTourDetails;
