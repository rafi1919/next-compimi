import React, { useState } from "react";
import LoginSection from "@/templates/components/LoginSection";

interface EventProps {
  eventData: any;
}

const LandingView: React.FC<EventProps> = ({ eventData }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [filteredEventData, setFilteredEventData] = useState([]);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleFilterApply = (location: string) => {
    const filteredData = eventData.filter(
      (event: { location: string }) => event.location === location
    );
    setFilteredEventData(filteredData);
    setModalOpen(false);
  };

  const eventsToDisplay =
    filteredEventData.length > 0 ? filteredEventData : eventData;

  return (
    <div className="w-full h-screen bg-paper">
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-6 lg:block md:hidden hidden h-[90vh]"></div>

        <div className="col-span-6 lg:block md:hidden hidden">
          <LoginSection />
        </div>
      </div>
    </div>
  );
};

export default LandingView;
