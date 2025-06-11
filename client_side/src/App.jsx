import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Client_Components/Footer";
import HomeLayout from "./Client_Components/HomeLayout/HomeLayout";
import { Bounce, ToastContainer } from "react-toastify";
import AboutUs from "./Client_Components/AboutUsLayout/AboutUs";
import AdminLogin from "./Admin_Components/AdminLoginLayout/AdminLogin";
import Contact from "./Client_Components/ContactUsLayout/Contact";
import Tour from "./Client_Components/TourpageLayout/tourpage";
import { useTourStore } from "./Store/useTourStore";
import { useEffect } from "react";
import NavBar from "./Client_Components/Navbar/NavBar";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const { getTourNepal, getTourIndia, loadingNepal, loadingIndia } =
    useTourStore();

  useEffect(() => {
    getTourIndia();
    getTourNepal();
  }, [getTourIndia, getTourNepal]);

  if (loadingIndia || loadingNepal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/tourpage" element={<Tour />} />
      </Routes>
      {!isLoginPage && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
