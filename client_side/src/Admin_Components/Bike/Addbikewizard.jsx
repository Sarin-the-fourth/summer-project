import { useState } from "react";
import AddBikeForm from "./Addbikeform";
import AddExistingBikeForm from "./Addexistingbikeform";

const AddBikeWizard = () => {
  const [mode, setmode] = useState("null");

  return (
    <div className="col-start-2 col-end-3 bg-[rgb(34,40,49)] p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setmode("new")}
          className="px-6 py-2 rounded font-montserrat font-light hover:bg-[#fdb913] hover:text-black transition-transform duration-300 transform hover:scale-102 focus:scale-98 bg-gray-600 text-white"
        >
          Add New Bike Model
        </button>

        <button
          onClick={() => setmode("existing")}
          className="px-6 py-2 rounded font-montserrat font-light hover:bg-[#fdb913] hover:text-black transition-transform duration-300 transform hover:scale-102 focus:scale-98 bg-gray-600 text-white"
        >
          Add Bike of Existing Model
        </button>
      </div>

      {mode === "new" && <AddBikeForm />}
      {mode === "existing" && <AddExistingBikeForm />}
    </div>
  );
};

export default AddBikeWizard;
