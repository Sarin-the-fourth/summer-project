import { Link } from "react-router-dom";
import { useTourStore } from "../../../Store/useTourStore";

const Indiadropdownitem = () => {
  const { toursofIndia } = useTourStore();
  return (
    <ul
      tabIndex={0}
      className="dropdown-content grid grid-cols-2 gap-5 bg-base-100/75 backdrop-blur-sm rounded-box z-1 w-xl p-2 shadow-sm mt-5"
    >
      {toursofIndia.length === 0 ? (
        <li>No Tours Found</li>
      ) : (
        toursofIndia.map((tour, index) => (
          <li
            key={index}
            className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition"
          >
            <Link to="#upper-mustang" className="block">
              <h3 className="font-bold text-[#212529]">{tour.name}</h3>
              <p className="font-poppins text-xs text-gray-600">
                {tour.description}
              </p>
            </Link>
          </li>
        ))
      )}

      {/* <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <a href="#leh-ladakh" className="block">
          <h3 className="font-bold text-[#212529]">Leh Ladakh Tour</h3>
          <p className="font-poppins text-xs text-gray-600">
            Embark on the breathtaking journey through Leh Ladakh's rugged
            trails
          </p>
        </a>
      </li>

      <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <a href="#spiti-valley" className="block">
          <h3 className="font-bold text-[#212529]">Spiti Valley Tour</h3>
          <p className="font-poppins text-xs text-gray-600">
            Traverse Spiti Valley's mystical landscapes
          </p>
        </a>
      </li> */}
    </ul>
  );
};

export default Indiadropdownitem;
