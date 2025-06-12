import bgimage from "./../../assets/images/uppermustang.jpg";

const Contact = () => {
  return (
    <div
      className="min-h-screen grid grid-cols-2 relative"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div className="m-20 relative text-white">
        <h1 className="text-4xl font-bold mb-4 uppercase mt-10">
          A quick Inquiry
        </h1>
        <div className="backdrop-blur-md bg-white/20 p-8 shadow-lg w-full max-w-md">
          <form>
            <label className="font-montserrat font-light text-md">
              <p>Your Name (required)</p>
            </label>
            <input
              type="text"
              className="text-black p-2 pl-2 w-full mt-2 focus:outline-none focus:shadow-xl bg-transparent placeholder-shown:bg-white transition-all duration-300"
              required
              placeholder="Enter your name"
              pattern="[A-Za-z ]{2,}"
              title="Name must contain at least 2"
            />

            {/*Client Email */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-5">Your Email (required)</p>
            </label>
            <input
              type="email"
              className="text-black  p-2 pl-2 w-full mt-2 focus:outline-none focus:shadow-xl bg-transparent placeholder-shown:bg-white transition-all duration-300"
              required
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />

            {/*Client Phone Number */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-5">Your Phone Number</p>
            </label>
            <input
              type="tel"
              className="text-black  p-2 pl-2 w-full mt-2 focus:outline-none focus:shadow-xl bg-transparent placeholder-shown:bg-white transition-all duration-300"
              placeholder="Enter your phone number"
              pattern="\d{10}"
              title="Enter valid phone number"
            />

            {/*Number of people */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-5">Number of Persons</p>
            </label>
            <input
              type="number"
              className="text-black  p-2 pl-2 w-full mt-2 focus:outline-none focus:shadow-xl bg-transparent placeholder-shown:bg-white transition-all duration-300"
              placeholder="Enter your phone number"
              title="Select number of persons"
              min="1"
              step="1"
              required
            />

            {/*Select tour */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-3">Select Tour</p>
            </label>
            <select
              className="text-black p-2 w-full mt-2 focus:outline-none focus:shadow-xl bg-white focus:bg-transparent transition-all duration-300"
              required
              defaultValue=""
              onChange={(e) => {
                if (e.target.value !== "") {
                  e.target.classList.remove("bg-white");
                  e.target.classList.add("bg-transparent");
                } else {
                  e.target.classList.remove("bg-transparent");
                  e.target.classList.add("bg-white");
                }
              }}
            >
              <option value="" disabled>
                -- Choose a tour --
              </option>
              <option value="uppermustang">The Forbidden Ride</option>
              <option value="Mustang">Road to Mustang</option>
              <option value="everest">Everest</option>
            </select>

            {/*Select Bikes */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-5">Select Bike</p>
            </label>
            <select
              className="text-black p-2 w-full mt-2 focus:outline-none focus:shadow-xl bg-white transition-all duration-300 focus:bg-transparent"
              required
              defaultValue=""
              onChange={(e) => {
                if (e.target.value !== "") {
                  e.target.classList.remove("bg-white");
                  e.target.classList.add("bg-transparent");
                } else {
                  e.target.classList.remove("bg-transparent");
                  e.target.classList.add("bg-white");
                }
              }}
            >
              <option value="" disabled>
                -- Choose a Bike --
              </option>
              <option value="uppermustang">Royal Enfield Classic 500</option>
              <option value="Mustang">Royal Enfield Himalayan 411</option>
            </select>

            {/*Select Dates */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-5">Select Date</p>
            </label>
            <input
              type="date"
              className="text-black p-2 pl-2 w-full mt-2 focus:outline-none focus:shadow-xl bg-white transition-all duration-300 focus:bg-transparent"
              placeholder="Enter date"
              title="Select tour starting date"
              required
              onChange={(e) => {
                if (e.target.value !== "") {
                  e.target.classList.remove("bg-white");
                  e.target.classList.add("bg-transparent");
                } else {
                  e.target.classList.remove("bg-transparent");
                  e.target.classList.add("bg-white");
                }
              }}
            />

            {/*Guide Option */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-5">Guide Option</p>
            </label>
            <div className="p-2 font-montserrat font-light text-sm">
              <input
                type="radio"
                name="radio-1"
                className="radio mr-1"
                defaultChecked
              />
              With Guide
              <input type="radio" name="radio-1" className="radio ml-2 mr-1" />
              Self-Guided
            </div>

            {/*Tour Inquiry */}
            <label className="font-montserrat font-light text-md">
              <p className="mt-5">Tour Inquiry Details</p>
            </label>
            <textarea
              className="textarea text-black p-2 pl-2 w-full h-[100px] mt-2 focus:outline-none focus:shadow-xl bg-transparent placeholder-shown:bg-white transition-all duration-300"
              placeholder="Bio"
            ></textarea>

            <button
              type="submit"
              className="btn font-montserrat font-light text-lg flex mt-10 bg-[#fdb913] focus:bg-black focus:text-white hover:shadow-2xl outline-none border-none shadow-none transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="m-20 relative text-white">
        <h1 className="text-4xl font-bold mb-4 uppercase mt-10">
          contact info
        </h1>
        <div className="font-montserrat  mt-10">
          <h2 className="uppercase font-bold">GOVT. REGISTRATION DETAILS</h2>
          <p className="font-light">
            Company Regd No. 89980/68/69 VAT NO: 600485395 Registered under
            <br />
            Company Act, Kathmandu, Nepal Tourism Industry Division License No:
            1783
          </p>

          <h2 className="uppercase font-bold mt-10">Office Address</h2>
          <p className="font-light">
            PO Box: 21087
            <br />
            Subarnashumshere Marg
            <br />
            Baluwatar, Kathmandu, Nepal
          </p>

          <h2 className="uppercase font-bold mt-10">email us</h2>
          <p className="font-light">
            wildtracksnepal@gmail.com
            <br />
            info@wildtracksnepal.com
          </p>

          <h2 className="uppercase font-bold mt-10">call us</h2>
          <p className="font-light">
            Tel. +977.1.4439590
            <br />
            Mobile: +977.9851054001 <br />
            WhatsApp: +977.9851054001 <br />
            Viber: +977.9851054001
          </p>

          <h2 className="uppercase font-bold mt-10">
            review us on tripadvisor
          </h2>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293890-d6696340-Reviews-Wild_Tracks_Nepal_Himalayan_Moto_Journeys-Kathmandu_Kathmandu_Valley_Bagmati_Zone.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:text-[#fdb913]"
          >
            <p>Wild Tracks Nepal</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
