import { Link } from "react-router-dom";
const Book = () => {
  return (
    <div className="min-h-30">
      <div className="mt-20 grid grid-cols-2">
        <Link
          to=""
          className="flex justify-center font-montserrat font-light text-xl "
        >
          <p className="border-0 rounded-md pl-5 pr-5 pt-1.5 pb-1.5 bg-[#fdb913] hover:bg-black hover:text-white">
            View Garage
          </p>
        </Link>
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
  );
};

export default Book;
