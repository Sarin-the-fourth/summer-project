import { Link } from "react-router-dom";
import { useState } from "react";

const Book = () => {
  const [showGarage, setShowGarage] = useState(false);

  const bike = [
    {
      brand: "Royal Enfield",
      model: "Classic",
      engine: "500cc",
      type: "Crusier",
    },
    {
      brand: "Royal Enfield",
      model: "Himalayan",
      engine: "411cc",
      type: "Crusier",
    },
  ];

  return (
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

        {showGarage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full">
              <h2 className="text-2xl font-semibold mb-4">Garage</h2>
              <ul className="space-y-4">
                {bikes.map((bike, index) => (
                  <li key={index} className="border p-4 rounded">
                    <p>
                      <strong>Model:</strong> {bike.name}
                    </p>
                    <p>
                      <strong>Engine:</strong> {bike.engine}
                    </p>
                    <p>
                      <strong>Type:</strong> {bike.type}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowGarage(false)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
