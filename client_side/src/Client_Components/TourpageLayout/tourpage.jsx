import Includes from "./Includes_excludes";
import Itinerary_Gallery from "./tour_itinerary_gallery";
import Tour_Hero from "./tourhero";
import Tour_Intro from "./tourintro";
import Book from "./Bikes_book";
import { useParams } from "react-router-dom";
import { useTourStore } from "../../Store/useTourStore";
import { useEffect } from "react";

const Tour = () => {
  const { id } = useParams();
  const { getTourById } = useTourStore();

  useEffect(() => {
    getTourById(id);
  }, [id]);

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
