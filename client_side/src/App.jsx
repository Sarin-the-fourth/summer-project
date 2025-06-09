import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import HomeLayout from "./Components/HomeLayout/HomeLayout";
import NavBar from "./Components/Navbar/Navbar";
import { Bounce, ToastContainer } from "react-toastify";
import AboutUs from "./Components/AbotUsLayout/AboutUs";
import AdminLogin from "./Components/AdminLoginLayout/AdminLogin";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
      <Footer />
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
