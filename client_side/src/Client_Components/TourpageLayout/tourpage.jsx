import bgimage from "./../../assets/images/uppermustang4.png";
import bgimage2 from "./../../assets/images/mustang.png";

import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

const Tour = () => {
  const openLightbox = (src) => {
    basicLightbox.create(`<img src="${src}" alt="preview" />`).show();
  };
  return (
    <>
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

      <div className="grid grid-cols-2 gap-25 m-10">
        <div>
          <h1 className="uppercase text-[#fdb913] flex justify-center font-bebas text-5xl">
            Introduction
          </h1>
          <p className="font-montserrat font-light mt-4 text-justify">
            Upper Mustang or formerly known as the Kingdom of Lo is a remote,
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
            adventure bikers.
          </p>
        </div>
        <div>
          <h1 className="uppercase font-black font-bebas text-5xl flex justify-center">
            Trip Overview
          </h1>
          <div className="font-montserrat mt-4">
            <div className="flex items-center space-x-2">
              <h2 className="font-bold text-xl">Duration:</h2>
              <p className="text-lg">10 days</p>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <h2 className="font-bold text-xl">Bookings This Year:</h2>
              <p className="text-lg">18th April</p>
              <p className="text-lg text-red-600">- Completed</p>
              <p className="text-lg">.</p>
              <p className="text-lg">21th Sept</p>
              <p className="text-lg text-green-600">- Open</p>
              <p className="text-lg">.</p>
              <p className="text-lg">21th Sept</p>
              <p className="text-lg text-yellow-400">- Booked</p>
              <p className="text-lg">.</p>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <h2 className="font-bold text-xl">Group Size:</h2>
              <p className="text-lg">Min: 1 to Max: 12</p>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <h2 className="font-bold text-xl">Altitude Gain:</h2>
              <p className="text-lg">4,660m</p>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <h2 className="font-bold text-xl">Bikes:</h2>
              <p className="text-lg">Royal Enfield Classic 500</p>
              <p className="text-lg">,</p>
              <p className="text-lg">Royal Enfield Himalayan 411</p>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <h2 className="font-bold text-xl">Trip Cost:</h2>
              <p className="text-lg">$3200 onwards (based on group size)</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative grid grid-cols-2 gap-5 mt-10 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bgimage2})` }}
      >
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>

        <div className="m-15 z-1">
          <h1 className="flex justify-center text-[#fdb913] text-5xl font-bebas">
            Trip Itinerary
          </h1>
          <div className="mt-10 text-justify font-montserrat">
            <div className="flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 1:</h2>
              <h2 className="font-bold text-xl">Arrive in Kathmandu.</h2>
            </div>
            <p className="font-light ">
              We will receive you at the airport and transfer you to our hotel
              in Thamel. Bikes will be at the hotel the same evening. Meet,
              greet and tour briefing over dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 2:</h2>
              <h2 className="font-bold text-xl">
                Kathmandu to Pokhara. 200km.
              </h2>
            </div>
            <p className="font-light ">
              Ride to Pokhara. Lunch stop at Kurintar. Arrive in Pokhara's
              Lakeside and check into hotel. Breakfast and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 3:</h2>
              <h2 className="font-bold text-xl">
                Pokhara to Kagbeni via Marpha. 200km
              </h2>
            </div>
            <p className="font-light ">
              Ride to Kagbeni via Beni, Tatopani, Kalopani, Marpha, Jomsom and
              finally to Kagbeni where we spend a night at Yak Donald's
              Restaurant and Hotel. Kagbeni offers spectacular views of Nilgiri
              mountains and the Kaligandaki river valley. Altitude 2800m.
              Breakast and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 4:</h2>
              <h2 className="font-bold text-xl">Kagbeni to Ghami.</h2>
            </div>
            <p className="font-light ">
              Ride to Ghami via Muktinath. 12km of blacktopped road to Muktinath
              temple from where the mountain views are jaw dropping. We ride on
              to Ghami with a lunch stop at Syangmochen. Breakfast and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 5:</h2>
              <h2 className="font-bold text-xl">
                Ghami to Lo Manthang via Ghar Monastery.
              </h2>
            </div>
            <p className="font-light ">
              Ride Ghami to Lo Manthang via Lo Gekar's Ghar Monastery. The newly
              constructed gravel road climbs as high as 3600m with full views of
              the Annapurna mountain range. Arrive in Lo Manthang and check into
              Mystique Hotel. Breakfast and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 6:</h2>
              <h2 className="font-bold text-xl">Lo Manthang sightseeing.</h2>
            </div>
            <p className="font-light ">
              An easy day. Visit the Walled City of Lo Manthang, Monasteries,
              etc. Ride to Sky Cave at Choeser Village and ride back. Breakfast
              and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 7:</h2>
              <h2 className="font-bold text-xl">Lo Manthang to Marpha</h2>
            </div>
            <p className="font-light ">
              We ride back the same route with tea stop at Sangboche. Lunch stop
              at Kagbeni. Permit checkout at Jomsom and head to Marpha's well
              preserved medieval village. Overnight at Hotel Tanpopo. Breakfast
              and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 8:</h2>
              <h2 className="font-bold text-xl">
                Marpha to Kusma's Cliff Resort.
              </h2>
            </div>
            <p className="font-light ">
              Enjoy the early morning clear views of the mountains. After
              breakfast we start our return ride to Kusma's Cliff Resort. Extra
              activities include bungy jump, ride on Kusma's hanging bridge,
              Cliff cycling, etc. Breakfast and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 9:</h2>
              <h2 className="font-bold text-xl">Ride to Pokhara and rest.</h2>
            </div>
            <p className="font-light ">
              A short 2 hours ride back to Pokhara. Rest or explore the lakeside
              or walk around the peaceful Fewa Lake. Breakfast and dinner.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <h2 className="font-bold text-xl"> Day 10:</h2>
              <h2 className="font-bold text-xl">Pokhara to Kathmandu.</h2>
            </div>
            <p className="font-light ">
              After breakfast, we start our ride back to Kathmandu. Coffee stop
              at Gunadi Highway Restaurant. Lunch stop at Riverside Spring
              Resort. Coffee stop at 56 Espresso Bar. Upon arrival in Kathmandu,
              check into our hotel in Thamel. Go for a celebration dinner.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Tour;
