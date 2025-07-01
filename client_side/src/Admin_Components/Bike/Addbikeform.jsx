import { useState } from "react";
import { useAdminStore } from "../../Store/useAdminStore";
import { toast } from "react-toastify";

const AddBikeForm = () => {
  const [coverPreview, setCoverPreview] = useState();
  const [loading, setLoading] = useState(false);
  const { addBike } = useAdminStore();
  const [bikeData, setBikeData] = useState({
    bike_number: "",
    bike_brand: "",
    bike_model: "",
    condition: "",
    bike_image: "",
    bike_description: "",
    bike_price: "",
    isNewModel: true,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBikeData((prev) => ({
          ...prev,
          bike_image: reader.result,
        }));
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting bikeData:", bikeData);
    if (
      !bikeData.bike_number ||
      !bikeData.bike_brand ||
      !bikeData.bike_model ||
      !bikeData.bike_image ||
      !bikeData.condition ||
      !bikeData.bike_description ||
      !bikeData.bike_price
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    await addBike({ ...bikeData, isNewModel: bikeData.isNewModel });
    setLoading(false);

    setBikeData({
      bike_number: "",
      bike_brand: "",
      bike_model: "",
      condition: "",
      bike_image: "",
      bike_description: "",
      bike_price: "",
      isNewModel: true,
    });
    setCoverPreview(null);
  };

  return (
    <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full">
      <h2 className="text-5xl text-center font-bebas font-bold text-white mb-6">
        Add New Bike
      </h2>
      <div className="space-y-4">
        {[
          {
            label: "Registration Number",
            key: "bike_number",
            type: "text",
          },
          { label: "Brand", key: "bike_brand", type: "text" },
          { label: "Model", key: "bike_model", type: "text" },
          { label: "Description", key: "bike_description", type: "textarea" },
          { label: "Price", key: "bike_price", type: "number" },
        ].map(({ label, key, type }) => (
          <div key={key}>
            <label className="block font-montserrat text-white mb-1">
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                value={bikeData[key] || ""}
                onChange={(e) =>
                  setBikeData({ ...bikeData, [key]: e.target.value })
                }
                className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:border-2"
                rows="3"
              />
            ) : type === "number" ? (
              <input
                type="number"
                min="0"
                value={bikeData[key] || ""}
                onChange={(e) => {
                  const raw = e.target.value;
                  const value = raw === "" ? "" : Number(raw);
                  if (value < 0) return;
                  setBikeData({
                    ...bikeData,
                    [key]: value,
                  });
                }}
                className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:shadow-2xl"
              />
            ) : (
              <input
                value={bikeData[key] || ""}
                onChange={(e) =>
                  setBikeData({ ...bikeData, [key]: e.target.value })
                }
                className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:border-2"
                rows="3"
              />
            )}
          </div>
        ))}

        <div>
          <label className="block text-md font-montserrat text-white  mb-1">
            Condition
          </label>
          <select
            value={bikeData.condition || ""}
            onChange={(e) =>
              setBikeData({ ...bikeData, condition: e.target.value })
            }
            className="w-full px-4 py-2 border font-montserrat border-gray-300 rounded-md focus:outline-none bg-white focus:font-montserrat focus:shadow-2xl"
          >
            <option value="">Select Condition</option>
            <option value="Excellent">Excellent</option>
            <option value="Running">Running</option>
            <option value="Needs Repair">Needs Repair</option>
          </select>
        </div>

        <div>
          <label className="block text-md font-montserrat text-white  mb-1">
            Bike Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block bg-white p-2 font-montserrat rounded hover:cursor-pointer hover:text-gray-500"
          />
          {coverPreview && (
            <img
              src={coverPreview}
              alt="Cover Preview"
              className="mt-2 h-40 object-cover rounded-md"
            />
          )}
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={handleSubmit}
            className="bg-gray-600 text-md font-montserrat text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:bg-gray-500 "
          >
            {loading ? "Adding..." : "Add Bike"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBikeForm;
