import React from "react";
import NavBar from "./NavBar";
import MainBody from "./MainBody";
import CardBody from "./CardBody";
import Divider from "./Divider";
import Gallery from "./Gallery";
import Footer from "./../Footer";

const HomeLayout = () => {
  return (
    <div>
      <NavBar />
      <MainBody />
      <CardBody />
      <Divider />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomeLayout;
