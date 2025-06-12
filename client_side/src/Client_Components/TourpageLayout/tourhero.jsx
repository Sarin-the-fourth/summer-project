import bgimage from "./../../assets/images/uppermustang4.png";

const Tour_Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-full">
          <h1 className="mb-5 text-8xl font-oranienbaum uppercase text-[#fdb913] font-bold">
            The forbidden Ride
          </h1>
          <p className="mb-5 text-6xl uppercase font-oranienbaum font-extralight ">
            upper mustang
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tour_Hero;
