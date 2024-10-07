import { useState } from "react";
import Layout from "@/templates/components/Layout";
import { FaMapPin, FaFilter } from "react-icons/fa";
import { Button, SwitchButton } from "@/templates/components/Buttons";
import JoinModal from "@/templates/components/Modal/JoinModal";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import "moment/locale/id";

const Dummy = () => {
  return (
    <div className="bg-slate-600 rounded-xl h-[300px] w-[50%]">
      <img
        src="../../banner.jpg"
        alt="banner"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

interface DetaiProps {
  dataEvent: any;
  dayListData: any;
}
const DetailEvent = ({ dataEvent, dayListData }: DetaiProps) => {
  const [activeDay, setActiveDay] = useState("dayOne");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleDayChange = (day: string) => {
    setActiveDay(day);
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const cosplayData = dayListData ? dayListData : [];
  moment.locale("id");
  const groupByAnime = (data: any[]) => {
    if (!data || data.length === 0) {
      return {};
    }
    return data.reduce((acc, item) => {
      const animeId = item.animeId || "Unknown";
      if (!acc[animeId]) {
        acc[animeId] = [];
      }
      acc[animeId].push(item);
      return acc;
    }, {});
  };

  const groupedData = dayListData ? groupByAnime(dayListData[activeDay]) : {};

  return (
    <Layout>
      <div className="py-2 lg:px-0 md:px-0 px-2 h-[100vh]  ">
        <div className="py-4 px-2 bg-paper rounded-[40px] w-full h-full overflow-auto no-scrollbar">
          <div className=" flex justify-between items-center">
            <h1 className="text-dark text-[32px] font-bold">
              {dataEvent ? dataEvent.name : null}
            </h1>

            {/* <FaFilter className="text-dark"/> */}
          </div>

          <div className="event card">
            <div className="flex gap-2">
              <Dummy />
              <Dummy />
            </div>
            <div className="text-dark py-3">
              <p className="text-md ">
                {moment(dataEvent.eventStartDate).format("Do MMMM")} -{" "}
                {moment(dataEvent.eventEndDate).format("Do MMMM YYYY")}
              </p>
              <p className="text-md flex">
                <FaMapPin />
                {dataEvent ? dataEvent.city : null},{" "}
                <span className="text-indigo mr-2">
                  <a href={dataEvent ? dataEvent.maps : null}>
                    {" "}
                    {dataEvent ? dataEvent.location : null}
                  </a>
                </span>
              </p>
              <p className="text-md py-2 text-gray-500">
                {dataEvent ? dataEvent.description : null}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1">
                <SwitchButton
                  days="day 1"
                  active={activeDay === "dayOne"}
                  onClick={() => handleDayChange("dayOne")}
                />
              </div>
              <div className="col-span-1">
                <SwitchButton
                  days="day 2"
                  active={activeDay === "dayTwo"}
                  onClick={() => handleDayChange("dayTwo")}
                />
              </div>
            </div>
            <div className="py-2">
              <Button text="JOIN" onClick={handleModalOpen} />
            </div>
            {cosplayData ? (
              Object.keys(groupedData).map((anime) => (
                <div key={anime} className="py-3">
                  <p className="p-2 rounded-t-md font-semibold bg-indigo w-fit">
                    {anime}
                  </p>
                  <div className="border-2 border-indigo rounded-b-md rounded-tr-md">
                    {groupedData[anime].map((item: any, index: number) => (
                      <div
                        className="flex items-end justify-between text-dark p-2"
                        key={index}
                      >
                        <p className="font-bold">{item.char}</p>
                        <Link
                          href={`https://www.instagram.com/${item.instagram}/?hl=en`}
                        >
                          <p>@{item.instagram}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center font-bold">Not Listed</p>
            )}
          </div>
          <JoinModal
            open={modalOpen}
            onClose={handleModalOpen}
            dayId={activeDay}
            eventId={dataEvent ? dataEvent._id : null}
          />
        </div>
      </div>
    </Layout>
  );
};

export default DetailEvent;
