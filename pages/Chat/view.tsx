import React, { useState } from "react";
import Layout from "@/templates/components/Layout";
import { Button } from "@/templates/components/Buttons";

const Dummy = () => {
  return <div className="bg-slate-600 rounded-xl w-full h-[300px]"></div>;
};

interface EventProps {
  eventData: any;
}

const ChatView: React.FC<EventProps> = ({ eventData }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [filteredEventData, setFilteredEventData] = useState([]);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  const eventsToDisplay =
    filteredEventData.length > 0 ? filteredEventData : eventData;

  return (
    <Layout>
      <div className=" px-3">
        <div className="flex gap-5 p-4">
          <div>
            <div className="w-[60px] h-[60px] bg-slate-600 rounded-full">
              <img
                src="../../banner.jpg"
                alt="banner"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <p className="text-dark font-semibold text-sm">Moeru</p>
          </div>
        </div>
        <div className=" ">
          <div className="rounded-md w-full border-dark border-2 h-[70vh] mb-3">
            <div className="h-[50px] border-b-2 border-dark flex justify-center items-center">
              <p className="text-dark w-fit font-bold">
                Day 1 - Jujutsu Kaisen
              </p>
            </div>
            <div className="w-full p-2">
              <p className="mr-auto p-2 text-sm rounded-md rounded-tl-none bg-indigo text-dark border-2 border-dark w-fit">
                Absen besok cuy
              </p>
              <p className="ml-auto p-2 text-sm rounded-md rounded-tr-none bg-leaf text-dark border-2 border-dark w-fit">
                Saya rafi jadi mechamaru besok
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-8">
              <input
                type="text"
                className="border-2 border-gray-300 bg-dark h-10 p-6  text-paper rounded-lg text-sm focus:outline-none w-full"
                placeholder="Type something"
              />
            </div>
            <div className="col-span-2">
              <Button text="Send" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatView;
