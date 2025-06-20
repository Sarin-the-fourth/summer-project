import { useEffect, useState } from "react";
import { useTourStore } from "../../Store/useTourStore";
import TourForm from "../TourWizard/TourForm";
import ItineraryForm from "../TourWizard/ItineraryForm";

const EditToursForm = ({ tourId }) => {
  const { getTourById, tour, itinerary, loadingTours } = useTourStore();
  const [step, setStep] = useState(0);
  const [tourData, setTourData] = useState(null);
  const [itineraryList, setItineraryList] = useState([]);

  useEffect(() => {
    if (tourId) {
      getTourById(tourId);
    }
  }, [tourId]);

  useEffect(() => {
    if (tour) {
      setTourData(tour);
    }
    if (itinerary) {
      setItineraryList(itinerary);
    }
  }, [tour, itinerary]);

  const handleUpdate = async () => {
    // Add your update API call here
    console.log("Update Tour:", tourData);
    console.log("Update Itinerary:", itineraryList);
  };

  if (loadingTours || !tourData) return <div>Loading...</div>;

  return (
    <div className="w-full p-4">
      {step === 0 ? (
        <TourForm
          onNext={() => setStep(1)}
          tourData={tourData}
          setTourData={setTourData}
        />
      ) : (
        <ItineraryForm
          itineraryList={itineraryList}
          setItineraryList={setItineraryList}
          currentStep={step - 1}
          setStep={(newStep) => setStep(newStep + 1)}
          totalDays={parseInt(tourData?.numberofdays) || 0}
          onBackToTour={() => setStep(0)}
          tourData={tourData}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
};

export default EditToursForm;
