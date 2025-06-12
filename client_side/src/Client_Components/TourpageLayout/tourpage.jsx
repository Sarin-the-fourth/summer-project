import Includes from "./Includes_excludes";
import Itinerary_Gallery from "./tour_itinerary_gallery";
import Tour_Hero from "./tourhero";
import Tour_Intro from "./tourintro";
import Book from "./Bikes_book";

const Tour = () => {
  return (
    <>
      <Tour_Hero />
      <Tour_Intro />
      <Itinerary_Gallery />
      <Includes />
      <Book />
    </>
  );
};

export default Tour;
