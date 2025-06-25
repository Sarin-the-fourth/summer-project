import { useState } from "react";

const TourForm = ({ onNext, tourData, setTourData }) => {
  const [coverPreview, setCoverPreview] = useState("");
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  const handleCoverImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTourData((prev) => ({ ...prev, cover_image: reader.result }));
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = [];
    const imagePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result);
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((images) => {
      setTourData((prev) => ({ ...prev, gallery_images: images }));
      setGalleryPreviews(previews);
    });
  };

  return (
    <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full ">
      <h2 className="text-5xl text-center font-bebas font-bold text-white mb-6">
        Tour Details
      </h2>
      <div className="space-y-4">
        {[
          { label: "Tour Name", key: "name", type: "text" },
          { label: "Location", key: "location", type: "text" },
          { label: "Description", key: "description", type: "textarea" },
          { label: "Introduction", key: "introduction", type: "textarea" },
          { label: "Altitude (m)", key: "altitude", type: "number" },
          { label: "Price", key: "price", type: "number" },
          { label: "Number of Days", key: "numberofdays", type: "number" },
        ].map(({ label, key, type }) => (
          <div key={key}>
            <label className="block text-md font-montserrat text-white mb-1">
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                value={tourData[key] || ""}
                onChange={(e) =>
                  setTourData({ ...tourData, [key]: e.target.value })
                }
                className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:border-2"
                rows="3"
              />
            ) : (
              <input
                type={type}
                {...(type === "number" ? { min: "0" } : {})}
                value={tourData[key] || ""}
                onChange={(e) => {
                  const value =
                    type === "number" ? Number(e.target.value) : e.target.value;
                  if (type === "number" && value < 0) return;
                  setTourData({
                    ...tourData,
                    [key]: value,
                  });
                }}
                className="w-full px-4 py-2 font-montserrat border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:shadow-2xl"
              />
            )}
          </div>
        ))}

        <div>
          <label className="block text-md font-montserrat text-white  mb-1">
            Country
          </label>
          <select
            value={tourData.country || ""}
            onChange={(e) =>
              setTourData({ ...tourData, country: e.target.value })
            }
            className="w-full px-4 py-2 border font-montserrat border-gray-300 rounded-md focus:outline-none bg-white focus:font-montserrat focus:shadow-2xl"
          >
            <option value="">Select Country</option>
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="Bhutan">Bhutan</option>
          </select>
        </div>

        <div>
          <label className="block text-md font-montserrat text-white  mb-1">
            Availability
          </label>
          <select
            value={tourData.availability ? "true" : "false"}
            onChange={(e) =>
              setTourData({
                ...tourData,
                availability: e.target.value === "true",
              })
            }
            className="w-full px-4 py-2 border font-montserrat bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:shadow-2xl"
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>

        <div>
          <label className="block text-md font-montserrat text-white  mb-1">
            Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
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

        <div>
          <label className="block text-md font-montserrat text-white  mb-1">
            Gallery Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryImagesChange}
            className="block bg-white p-2 font-montserrat rounded hover:cursor-pointer hover:text-gray-500"
          />
          <div className="mt-2 flex gap-2 flex-wrap">
            {galleryPreviews.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="h-20 w-20 object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onNext}
            className="bg-gray-600 text-md font-montserrat text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:bg-gray-500 "
            disabled={!tourData.name || !tourData.numberofdays}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourForm;
