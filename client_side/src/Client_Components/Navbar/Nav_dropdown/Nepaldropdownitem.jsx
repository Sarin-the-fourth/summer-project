import { useEffect } from "react";
import { useTourStore } from "../../../Store/useTourStore";
import { Link } from "react-router-dom";

const Nepaldropdownitem = () => {
  const { toursofNepal } = useTourStore();

  return (
    <ul
      tabIndex={0}
      className="dropdown-content grid grid-cols-2 gap-5 bg-base-100/75 backdrop-blur-sm rounded-box z-1 w-xl p-2 shadow-sm mt-5"
    >
      {toursofNepal.length === 0 ? (
        <li>No Tours Found</li>
      ) : (
        toursofNepal.map((tour, index) => (
          <li
            key={index}
            className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition"
          >
            <Link to={`/tour/${tour._id}`} className="block">
              <h3 className="font-bold text-[#212529]">{tour.name}</h3>
              <p className="font-poppins text-xs text-gray-600">
                {tour.description}
              </p>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Nepaldropdownitem;
