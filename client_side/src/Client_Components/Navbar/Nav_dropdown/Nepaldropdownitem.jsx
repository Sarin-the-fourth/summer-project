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

      {/* <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#upper-mustang" className="block">
          <h3 className="font-bold text-[#212529]">The Fordbidden Ride</h3>
          <p className="font-poppins text-xs text-gray-600">
            Discover the mystical, rugged, and cultural essence of Upper Mustang
          </p>
        </Link>
      </li> */}

      {/* <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#mustang" className="block">
          <h3 className="font-bold text-[#212529]">Road to Mustang</h3>
          <p className="font-poppins text-xs text-gray-600">
            Experience the serene, picturesque, and cultural charm of Lower
            Mustang
          </p>
        </Link>
      </li>

      <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#everest" className="block">
          <h3 className="font-bold text-[#212529]">Road to Everest</h3>
          <p className="font-poppins text-xs text-gray-600">
            Ride through the awe-inspiring, rugged, and thrilling landscapes of
            Everest
          </p>
        </Link>
      </li>

      <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#best-of-nepal" className="block">
          <h3 className="font-bold text-[#212529]">Best of Nepal</h3>
          <p className="font-poppins text-xs text-gray-600">
            Explore Nepal's epic landscapes and culture on two wheels
          </p>
        </Link>
      </li>

      <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#manang" className="block">
          <h3 className="font-bold text-[#212529]">Manang Bike Tour</h3>
          <p className="font-poppins text-xs text-gray-600">
            Ride through Manang's rugged trails and stunning mountain views
          </p>
        </Link>
      </li>

      <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#manang" className="block">
          <h3 className="font-bold text-[#212529]">Manang Bike Tour</h3>
          <p className="font-poppins text-xs text-gray-600">
            Ride through Manang's rugged trails and stunning mountain views
          </p>
        </Link>
      </li>

      <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#everest-basecamp-trek" className="block">
          <h3 className="font-bold text-[#212529]">Everest Base Camp Trek</h3>
          <p className="font-poppins text-xs text-gray-600">
            Embark on the epic trek to Everest Base Camp
          </p>
        </Link>
      </li>

      <li className="p-2 rounded hover:bg-[#fdb913] hover:text-black transition">
        <Link to="#phoksundo-trek" className="block">
          <h3 className="font-bold text-[#212529]">Phoksundo Trek</h3>
          <p className="font-poppins text-xs text-gray-600">
            Discover the pristine wilderness on the Phoksundo trek
          </p>
        </Link>
      </li> */}
    </ul>
  );
};

export default Nepaldropdownitem;
