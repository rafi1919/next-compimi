import React, { useState } from "react";
import Layout from "@/templates/components/Layout";
import { FaFilter } from "react-icons/fa";
import SearchBar from "@/templates/components/SearchBar";
import EventCard from "@/templates/components/EventCard2";
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

  const handleFilterApply = (city: string) => {
    const filteredData = eventData.filter(
      (event: { city: string }) => event.city === city
    );
    setFilteredEventData(filteredData);
    setModalOpen(false);
  };

  const eventsToDisplay =
    filteredEventData.length > 0 ? filteredEventData : eventData;

  return (
    <Layout>
      <div className="py-2 lg:px-0 md:px-0 px-2 h-[100vh] ">
        <div className="py-4 bg-paper rounded-[40px] w-full h-full ">
          <div className="p-3">
            <SearchBar />
            <div className=" flex justify-between items-center">
              <h1 className=" text-dark text-[32px] font-bold">
                today's event
              </h1>

              <FaFilter
                className="text-dark cursor-pointer"
                onClick={handleModalOpen}
              />
            </div>
          </div>
          <FilterModal
            open={modalOpen}
            onClose={handleModalOpen}
            onApply={handleFilterApply}
          />

          {/* <div className='mb-40'></div> */}
          <div className="overflow-auto h-[80%] rounded-[40px] no-scrollbar">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 p-3">
              {eventsToDisplay.map((item: any) => (
                <div key={item + 1} className="flex justify-center">
                  <EventCard
                    location={item.location}
                    name={item.name}
                    id={item._id}
                    city={item.city}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeView;
