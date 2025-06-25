import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import TourWizard from "./Tour/TourWizard";
import Welcomepage from "./Welcomepage";
import { Navigate } from "react-router-dom";
import AddBikeForm from "./Bike/Addbikeform";
import Details from "./Bike/Details";
import Managebike from "./Bike/Managebike";

const AdminDashboard = () => {
  const { isLoggedIn } = useAuthStore();
  if (!isLoggedIn) return <Navigate to="/admin/login" replace />;

  const [showTourForm, setShowTourForm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBikeForm, setShowBikeForm] = useState(false);
  const [showBikeDetails, setShowBikeDetails] = useState(false);
  const [showManageBike, setShowManageBike] = useState(false);

  const handleSidebarItemClick = () => {
    setShowWelcome(false);
  };

  const handleAddTourClick = () => {
    setShowTourForm(true);
    setShowBikeForm(false);
    setShowWelcome(false);
    setShowBikeDetails(false);
    setShowManageBike(true);
  };

  const handleAddBikeClick = () => {
    setShowBikeForm(true);
    setShowTourForm(false);
    setShowWelcome(false);
    setShowBikeDetails(false);
    setShowManageBike(true);
  };

  const handleBikeDetails = () => {
    setShowBikeDetails(true);
    setShowTourForm(false);
    setShowBikeForm(false);
    setShowWelcome(false);
    setShowManageBike(false);
  };

  const handleManageBike = () => {
    setShowManageBike(true);
    setShowBikeDetails(false);
    setShowTourForm(false);
    setShowBikeForm(false);
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-[#393e46] grid grid-cols-[290px_1fr]">
      <Sidebar
        onSidebarItemClick={handleSidebarItemClick}
        onAddTourClick={handleAddTourClick}
        onAddBikeClick={handleAddBikeClick}
        onDetailsClick={handleBikeDetails}
        onManageBikeClick={handleManageBike}
      />
      <div className="flex flex-col p-4 space-y-4">
        <Searchbar />
        {/* Main content goes here */}
        {showTourForm && <TourWizard onClose={() => setShowTourForm(false)} />}
        {showBikeForm && <AddBikeForm onClose={() => setShowBikeForm(false)} />}
        {showBikeDetails && (
          <Details onClose={() => setShowBikeDetails(false)} />
        )}
        {showManageBike && (
          <Managebike onClose={() => setShowManageBike(false)} />
        )}
        {showWelcome && !showTourForm && <Welcomepage />}
      </div>
    </div>
  );
};

export default AdminDashboard;
