import { useTourStore } from "../../Store/useTourStore";

const Tour_Intro = () => {
  const { tour } = useTourStore();
  return (
    <div className="grid grid-cols-2 gap-25 m-10">
      <div>
        <h1 className="uppercase text-[#fdb913] flex justify-center font-bebas text-5xl">
          Introduction
        </h1>
        <p className="font-montserrat font-light mt-4 text-justify whitespace-pre-line">
          {/* Upper Mustang or formerly known as the Kingdom of Lo is a remote,
          rugged and once a forbidden region north of Annapurna. In 1992 the
          area was finally opened to a limited number of foreign visitors per
          year. Today Upper Mustang is one of the most sought after biking and
          trekking destinations in Nepal highlighting more than 1000 year old
          monasteries, ancient war caves, nomadic tribes, moon-like scenic
          landscapes dotted by snowy peaks that includes 8160m Mt. Dhaulagiri.
          <br />
          <br />
          With the opening of a dirt road all the way to the border at Karola
          Pass (4,660m), Upper Mustang is now proving to be a paradise for
          adventure bikers. */}

          {tour?.introduction}
        </p>
      </div>
      <div>
        <h1 className="uppercase font-black font-bebas text-5xl flex justify-center">
          Trip Overview
        </h1>
        <div className="font-montserrat mt-4">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold text-xl">Duration:</h2>
            <p className="text-lg">{tour?.numberofdays} days</p>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <h2 className="font-bold text-xl">Group Size:</h2>
            <p className="text-lg">Min: 1 to Max: 12</p>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <h2 className="font-bold text-xl">Altitude Gain:</h2>
            <p className="text-lg">{tour?.altitude}m</p>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <h2 className="font-bold text-xl">Bikes:</h2>
            <p className="text-lg">Royal Enfield Classic 500</p>
            <p className="text-lg">,</p>
            <p className="text-lg">Royal Enfield Himalayan 411</p>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <h2 className="font-bold text-xl">Trip Cost:</h2>
            <p className="text-lg">${tour?.price} per person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour_Intro;
