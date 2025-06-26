import { useEffect, useState } from "react";
import TourForm from "./TourForm";
import ItineraryForm from "./ItineraryForm";
import { useAdminStore } from "../../Store/useAdminStore";

const TourWizard = () => {
  const [step, setStep] = useState(0);
  const [tourData, setTourData] = useState({
    name: "",
    location: "",
    description: "",
    introduction: "",
    price: "",
    altitude: "",
    numberofdays: "",
    country: "",
    availability: true,
    recommended_bikes: "",
    cover_image: "",
    gallery_images: [],
  });

  const [itineraryList, setItineraryList] = useState([]);

  useEffect(() => {
    if (tourData.numberofdays) {
      const days = parseInt(tourData.numberofdays);
      if (days > 0 && itineraryList.length !== days) {
        setItineraryList(Array(days).fill(null));
      }
    }
  }, [tourData.numberofdays]);

  const { addTour } = useAdminStore();
  const handleSubmit = (completeTourData) => {
    console.log(completeTourData);
    addTour(completeTourData);
  };

  return (
    <div className="w-full">
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
          totalDays={parseInt(tourData.numberofdays) || 0}
          onBackToTour={() => setStep(0)}
          tourData={tourData}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default TourWizard;
