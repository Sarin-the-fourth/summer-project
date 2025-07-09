import MainBody from "./MainBody";
import CardBody from "./CardBody";
import Divider from "./Divider";
import Gallery from "./Gallery";
import { useEffect } from "react";

const HomeLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <MainBody />
      <CardBody />
      <Divider />
      <Gallery />
    </div>
  );
};

export default HomeLayout;
