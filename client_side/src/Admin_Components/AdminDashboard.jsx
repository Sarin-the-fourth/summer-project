import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import TourWizard from "./AddTour/TourWizard";
import Welcomepage from "./Welcomepage";
import { Navigate } from "react-router-dom";
import AddBikeForm from "./AddBike/Addbikeform";

const AdminDashboard = () => {
  const { isLoggedIn } = useAuthStore();
  if (!isLoggedIn) return <Navigate to="/admin/login" replace />;

  const [showTourForm, setShowTourForm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBikeForm, setShowBikeForm] = useState(false);

  const handleSidebarItemClick = () => {
    setShowWelcome(false);
  };

  const handleAddTourClick = () => {
    setShowTourForm(true);
    setShowBikeForm(false);
    setShowWelcome(false);
  };

  const handleAddBikeClick = () => {
    setShowBikeForm(true);
    setShowTourForm(false);
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-[#393e46] grid grid-cols-[290px_1fr]">
      <Sidebar
        onSidebarItemClick={handleSidebarItemClick}
        onAddTourClick={handleAddTourClick}
        onAddBikeClick={handleAddBikeClick}
      />
      <div className="flex flex-col p-4 space-y-4">
        <Searchbar />
        {/* Main content goes here */}
        {showTourForm && <TourWizard onClose={() => setShowTourForm(false)} />}
        {showBikeForm && <AddBikeForm onClose={() => setShowBikeForm(false)} />}
        {showWelcome && !showTourForm && <Welcomepage />}
      </div>
    </div>
  );
};

export default AdminDashboard;
