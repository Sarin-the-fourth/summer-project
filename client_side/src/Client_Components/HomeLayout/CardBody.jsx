import uppermustang from "./.././../assets/images/uppermustang2.png";
import bgimage2 from "./../../assets/images/mustang.png";
import { useHomeStore } from "../../Store/useHomeStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardBody = () => {
  const { fetchHomepage, homepage } = useHomeStore();

  useEffect(() => {
    fetchHomepage();
  }, []);

  return (
    <div
      className="text-center min-h-screen relative"
      style={{ backgroundImage: `url(${bgimage2})` }}
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <h1
        className=" pb-10 text-6xl pt-20 font-bebas"
        style={{
          color: "#DDDD",
        }}
      >
        The Best Three
      </h1>
      <div className="flex justify-center gap-4 pl-4 pr-4 pb-3">
        {homepage?.card?.length > 0 && (
          <>
            {homepage.card.slice(0, 3).map((tour, index) => (
              <div key={index} className="card backdrop-blur-xs w-96 shadow-sm">
                <figure>
                  <img
                    src={tour.cover_image || uppermustang}
                    alt={tour.name || "Tour Image"}
                    className="w-full h-60 object-cover"
                  />
                </figure>
                <div className="card-body flex flex-col justify-center items-center">
                  <h2 className="card-title text-xl text-[#fdb913]">
                    {tour.name}
                  </h2>
                  <p className="text-2xs text-[#dddd]">{tour.description}</p>
                  <p className="font-bold text-[#dddd]">
                    Duration: {tour.numberofdays} days
                  </p>
                  <div className="card-actions">
                    <Link
                      to={`/tour/${tour._id}`}
                      className="btn btn-ghost text-lg outline-none text-[#dddd] hover:bg-[#fdb913] hover:text-black"
                    >
                      Trip Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default CardBody;
