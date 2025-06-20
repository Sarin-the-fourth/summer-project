import { useTourStore } from "../../Store/useTourStore";
import bgimage from "./../../assets/images/uppermustang4.png";

const getCloudinaryImage = (url) => {
  if (!url.includes("cloudinary")) return url;

  const parts = url.split("/upload/");
  if (parts.length !== 2) return url;

  return `${parts[0]}/upload/w_1920,q_90/${parts[1]}`;
};

const Tour_Hero = () => {
  const { tour } = useTourStore();
  return (
    <div className="hero min-h-screen relative">
      <img
        src={tour?.cover_image ? getCloudinaryImage(tour.cover_image) : bgimage}
        alt="Tour Cover"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-full">
          <h1 className="mb-5 text-8xl font-oranienbaum uppercase text-[#fdb913] font-bold">
            {tour?.name}
          </h1>
          <p className="mb-5 text-6xl uppercase font-oranienbaum font-extralight ">
            {tour?.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tour_Hero;
