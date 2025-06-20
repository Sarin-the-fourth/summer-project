import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ onAddTourClick }) => {
  const [isTourOpen, setisTourOpen] = useState(false);
  const [isBikeOpen, setisBikeOpen] = useState(false);
  const [isInquiryOpen, setisInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[rgb(34,40,49)] hidden md:block">
      <div className="ml-5 mt-5 flex items-center space-x-2">
        <img className="w-12 h-12" src="./wtalogo1.ico" />
        <h1 className="uppercase font-bebas text-white text-3xl">
          wildtracksnepal
        </h1>
      </div>

      <div className="mt-20 ml-5 font-montserrat text-[#dddd]">
        <legend className="opacity-70 font-light mb-2">Menu</legend>
        <ul className="cursor-pointer pr-2">
          <li className="font-semibold hover:bg-[black] p-2 rounded-md">
            <Link to="#"> Homepage</Link>
          </li>

          <li
            className="font-semibold hover:bg-[black] p-2 rounded-md"
            onClick={() => setisTourOpen(!isTourOpen)}
          >
            Tours
          </li>
          {isTourOpen && (
            <ul className="ml-10 text-md mb-2 space-y-2 mt-1">
              <li className="hover:text-white">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onAddTourClick();
                  }}
                >
                  Add Tours
                </Link>
              </li>
              <li className="hover:text-white">
                <Link to="#">Edit Tour details</Link>
              </li>
              <li className="hover:text-white">
                <Link to="#">Delete Tours</Link>
              </li>
            </ul>
          )}

          <li
            className="font-semibold hover:bg-[black] p-2 rounded-md"
            onClick={() => setisBikeOpen(!isBikeOpen)}
          >
            Bikes
          </li>
          {isBikeOpen && (
            <ul className="ml-10 text-md mb-2 space-y-2 mt-1">
              <li className="hover:text-white">
                <Link to="#">Add Bikes</Link>
              </li>
              <li className="hover:text-white">
                <Link to="#">Manage Bikes</Link>
              </li>
            </ul>
          )}

          <li
            className="font-semibold hover:bg-[black] p-2 rounded-md"
            onClick={() => setisInquiryOpen(!isInquiryOpen)}
          >
            Booking Inquiries
          </li>
          {isInquiryOpen && (
            <ul className="ml-10 text-md mb-2 space-y-2 mt-1">
              <li className="hover:text-white">
                <Link to="#">Pending</Link>
              </li>
              <li className="hover:text-white">
                <Link to="#">Approved</Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
