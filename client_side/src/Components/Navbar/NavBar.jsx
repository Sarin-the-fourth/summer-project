import React, { useEffect, useState } from "react";
import logo from "./../../assets/images/wtalogo.png";
import Nepaldropdownitem from "./Nav_dropdown/Nepaldropdownitem";
import Indiadropdownitem from "./Nav_dropdown/Indiadropdownitem";

import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useTourStore } from "../../Store/useTourStore";
const NavBar = () => {
  const { getTourNepal, getTourIndia } = useTourStore();

  useEffect(() => {
    getTourNepal();
    getTourIndia();
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar-wrapper ${visible ? "" : "hide-navbar"}`}>
      <div className="navbar bg-white/30 backdrop-blur-sm border-0 px-8 py-5 font-bebas flex justify-center sticky top-0 z-99">
        <div className="absolute left-5 top-1 bottom-1 flex items-center h-15 px-4">
          <Link to="/" className="text-lg cursor-pointer">
            <img src={logo} alt="logo" className="h-15" />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="md:flex gap-16 font-bebas-neue text-xl items-center  hidden ">
          <Link
            to={"/"}
            className="flex cursor-pointer"
            style={{ color: "black" }}
            onMouseEnter={(e) => (e.target.style.color = "#fdb913")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            Home
          </Link>

          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="flex cursor-pointer"
              style={{ color: "black" }}
              onMouseEnter={(e) => (e.target.style.color = "#fdb913")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
              onClick={(e) => (e.target.style.color = "#fdb913")}
            >
              Nepal
            </div>
            <Nepaldropdownitem />
          </div>

          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              className="flex cursor-pointer"
              style={{ color: "black" }}
              onMouseEnter={(e) => (e.target.style.color = "#fdb913")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              India
            </div>

            <Indiadropdownitem />
          </div>

          <a
            href="#Bhutan"
            className="flex cursor-pointer"
            style={{ color: "black" }}
            onMouseEnter={(e) => (e.target.style.color = "#fdb913")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            Bhutan
          </a>
          <Link
            to={"/aboutus"}
            className="flex cursor-pointer"
            style={{ color: "black" }}
            onMouseEnter={(e) => (e.target.style.color = "#fdb913")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            About Us
          </Link>

          <Link
            to="/contactus"
            className="flex cursor-pointer"
            style={{ color: "black" }}
            onMouseEnter={(e) => (e.target.style.color = "#fdb913")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navbar */}
      </div>
    </nav>
  );
};

export default NavBar;
