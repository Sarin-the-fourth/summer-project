import { useTourStore } from "../../Store/useTourStore";

const Includes = () => {
  const { tour } = useTourStore();
  return (
    <div className="min-h-50 m-10">
      <h1 className="font-bebas text-4xl">Includes:</h1>
      <p className=" text-justify font-montserrat">{tour?.includes}</p>

      <h1 className=" mt-10 font-bebas text-4xl">Excludes:</h1>
      <p className="text-justify font-montserrat">{tour?.excludes}</p>
    </div>
  );
};

export default Includes;
