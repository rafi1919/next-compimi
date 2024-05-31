import React, { useState } from "react";
import Layout from "@/templates/components/Layout";
import { FaFilter } from "react-icons/fa";
import SearchBar from "@/templates/components/SearchBar";
import EventCard from "@/templates/components/EventCard";
import FilterModal from "@/templates/components/Modal/FilterModal";

interface EventProps {
  eventData: any;
}

const HomeView: React.FC<EventProps> = ({ eventData }) => {
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
    <Layout>
      <div className="py-4 lg:w-[760px] md:w-full w-full bg-paper">
        <div className="p-3">
          <SearchBar />
          <div className=" flex justify-between items-center">
            <h1 className=" text-dark text-[32px] font-bold">today's event</h1>

            <FaFilter className="text-dark" onClick={handleModalOpen} />
          </div>
        </div>
        <FilterModal
          open={modalOpen}
          onClose={handleModalOpen}
          onApply={handleFilterApply}
        />
      </div>

      {/* <div className='mb-40'></div> */}
      <div className="flex flex-col gap-2 p-3">
        {eventsToDisplay.map((item: any) => (
          <div key={item + 1}>
            <EventCard location={item.location} name={item.name} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomeView;
