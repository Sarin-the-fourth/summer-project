import uppermustang from "./.././../assets/images/uppermustang2.png";
const CardBody = () => {
  return (
    <div className="text-center min-h-screen bg-black">
      <h1
        className=" pb-10 text-6xl pt-20 font-bebas"
        style={{
          color: "#DDDD",
        }}
      >
        The Best Three
      </h1>
      <div className="flex justify-center gap-4 pl-4 pr-4 pb-3">
        {/* Card 1*/}
        <div className="card w-96 shadow-sm">
          <figure>
            <img
              src={uppermustang}
              alt="Upper mustang"
              style={{
                width: 100 % CardBody,
                height: "100%",
                objectFit: "cover",
              }}
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-2xl" style={{ color: "#fdb913" }}>
              THE FORBIDDEN RIDE
            </h2>
            <p className="text-2xs" style={{ color: "#DDDD" }}>
              An adventurous ride to the once forbidden kingdom of Lo, Upper
              Mustang. Situated in the rain shadow area of the Annapurna
              mountains with it's unique lunar landscape.
            </p>
            <p className="font-bold" style={{ color: "#dddd" }}>
              Duration: 10 days
            </p>
            <p>Tour Nepal: </p>
            <div className="card-actions">
              <a
                href="#upper-mustang"
                className="btn btn-ghost"
                style={{ color: "#DDDD" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#fdb913";
                  e.target.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "#DDDD";
                }}
              >
                Trip Details
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-96 shadow-sm">
          <figure>
            <img
              src={uppermustang}
              alt="Upper mustang"
              style={{
                width: 100 % CardBody,
                height: "100%",
                objectFit: "cover",
              }}
            />
          </figure>
          <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title text-xl" style={{ color: "#fdb913" }}>
              NEPAL-INDIA-BHUTAN
            </h2>
            <p style={{ color: "#dddd" }}>
              Witness the beauty of the flatlands of Terai in Nepal. Visit the
              organic state of India Sikkim, Queen of Hills Darjeeling before we
              enter the dragon Kingdom Bhutan
            </p>
            <p className="font-bold" style={{ color: "#dddd" }}>
              Duration: 15 days <br />
            </p>
            <div className="card-actions">
              <a
                href="#Bhutan"
                className="btn btn-ghost"
                style={{ color: "#DDDD" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#fdb913";
                  e.target.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "#DDDD";
                }}
              >
                Trip Details
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-96 shadow-sm">
          <figure>
            <img
              src={uppermustang}
              alt="Upper mustang"
              style={{
                width: 100 % CardBody,
                height: "100%",
                objectFit: "cover",
              }}
            />
          </figure>
          <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title text-xl" style={{ color: "#fdb913" }}>
              ROAD TO EVEREST
            </h2>
            <p style={{ color: "#dddd" }}>
              Ride to Pattale for Everest views, explore Pikey, visit Chiwong
              Monastery and Junbesi Nunnery, cross Lamjura Pass to Jiri, then
              stay overnight at the Last Resort near the Tibetan border before
              heading back to Kathmandu.
            </p>
            <p className="font-bold" style={{ color: "#dddd" }}>
              Duration: 5 days
            </p>
            <div className="card-actions">
              <a
                href="#everest"
                className="btn btn-ghost"
                style={{ color: "#DDDD" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#fdb913";
                  e.target.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "#DDDD";
                }}
              >
                Trip Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardBody;
