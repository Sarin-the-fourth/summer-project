import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    // Optional: add search logic here
  };

  const [isAdminOpen, setisAdminOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="w-full max-w-[800px] p-2 px-3 placeholder-[#dddd] outline-0 text-white rounded-full bg-[#222831]"
        />
        <div
          className="relative flex items-center gap-3 ml-4 cursor-pointer"
          onClick={() => setisAdminOpen(!isAdminOpen)}
        >
          <h1 className="text-whit text-md font-montserrat font-light group-hover:text-white text-[#dddd]">
            Sherap
          </h1>
          <img
            src="./Admin_photo.png"
            alt="admin_image"
            className="w-10 h-10 rounded-full object-cover"
          />

          {isAdminOpen && (
            <ul className="absolute top-full right-0 mt-2 w-40 font-montserrat font-light text-sm bg-[#222831] text-[#dddd] rounded shadow-lg z-50">
              <li className="px-4 py-2 hover:text-white cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:text-white cursor-pointer">
                Log Out
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
