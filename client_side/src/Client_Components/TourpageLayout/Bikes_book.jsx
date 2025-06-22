import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBikeStore } from "../../Store/useBikeStore";

const Book = () => {
  const [showGarage, setShowGarage] = useState(false);
  const [loading, setLoading] = useState(false);
  const { bikes, fetchBikes } = useBikeStore();

  useEffect(() => {
    const loadBikes = async () => {
      setLoading(true);
      await fetchBikes();
      setLoading(false);
    };
    loadBikes();
  }, []);

  return (
    <>
      {showGarage && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-10 flex items-center justify-center z-10">
          <div className="bg-white p-10 m-10 rounded-lg w-full">
            <h2 className="text-7xl text-center font-bebas mb-4">Garage</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {loading ? (
                <p>Loading bikes...</p>
              ) : !loading && bikes.length === 0 ? (
                <p>No bikes available.</p>
              ) : (
                bikes.map((items) => (
                  <div
                    key={items.bike_number}
                    className="grid grid-cols-2 m-4 p-4 bg-gray-50 rounded-lg shadow-md"
                  >
                    <div className="flex flex-col justify-center items-center space-y-4">
                      {items.bike_image ? (
                        <img
                          src={items.bike_image}
                          alt={items.bike_model}
                          className="w-40 h-40 object-cover rounded"
                        />
                      ) : (
                        <div className="w-40 h-40 flex items-center justify-center bg-gray-200 text-gray-500 rounded">
                          No Image
                        </div>
                      )}
                      <p className="font-montserrat font-bold text-lg">
                        {items.bike_model}
                      </p>
                      <p className="font-montserrat font-medium text-lg">
                        {items.bike_description}
                      </p>
                      <p className="font-montserrat font-bold text-lg">
                        Price: {items.bike_price}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* <ul className="space-y-4">
              {bike.map((bike, index) => (
                <li key={index} className="border p-4 rounded">
                  <p>
                    <strong>Model:</strong> {bike.model}
                  </p>
                  <p>
                    <strong>Engine:</strong> {bike.engine}
                  </p>
                  <p>
                    <strong>Type:</strong> {bike.type}
                  </p>
                </li>
              ))}
            </ul> */}
            <button
              onClick={() => setShowGarage(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="min-h-30">
        <div className="mt-20 grid grid-cols-2">
          <button
            onClick={() => setShowGarage(true)}
            className="flex justify-center font-montserrat font-light text-xl "
          >
            <p className="border-0 rounded-md pl-5 pr-5 pt-1.5 pb-1.5 bg-[#fdb913] hover:bg-black hover:text-white">
              View Garage
            </p>
          </button>

          <Link
            to="/contactus"
            className="flex justify-center font-montserrat font-light text-xl "
          >
            <p className=" rounded-md pl-5 pr-5 pt-1.5 pb-1.5 bg-[#fdb913] hover:bg-black hover:text-white">
              Send Trip Inquiry
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Book;
