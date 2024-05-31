import { useState } from "react";
import Layout from "@/templates/components/Layout";
import { FaMapPin, FaFilter } from "react-icons/fa";
import { Button, SwitchButton } from "@/templates/components/Buttons";
import JoinModal from "@/templates/components/Modal/JoinModal";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const [activeDay, setActiveDay] = useState("day 1");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const route = useRouter();

  const handleDayChange = (day: string) => {
    setActiveDay(day);
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const cosplayData =
    activeDay === "day 1" ? dayListData?.dayOne : dayListData?.dayTwo;

  return (
    <Layout>
      <div className="py-4 px-3">
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
            <p className="text-md font-light">4 mei - 5 mei 2024</p>
            <p className="text-md font-light flex">
              <FaMapPin />
              {dataEvent ? dataEvent.location : null}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <SwitchButton
                days="day 1"
                active={activeDay === "day 1"}
                onClick={() => handleDayChange("day 1")}
              />
            </div>
            <div className="col-span-1">
              <SwitchButton
                days="day 2"
                active={activeDay === "day 2"}
                onClick={() => handleDayChange("day 2")}
              />
            </div>
          </div>
          <div className="py-2">
            <Button text="JOIN" onClick={handleModalOpen} />
          </div>
          {cosplayData && cosplayData.length > 0 ? (
            cosplayData.map((item: any) => (
              <div key={item.id} className="py-3">
                <p className=" p-2 rounded-t-md font-semibold bg-indigo w-fit">
                  {item.anime}
                </p>
                <div className="border-2 border-indigo rounded-b-md rounded-tr-md">
                  {item.ListCosplay.map((item: any, index: number) => (
                    <div
                      className="flex items-end justify-between text-dark p-2"
                      key={index}
                    >
                      <p className="font-bold">{item.char}</p>
                      <Link
                        href={`https://www.instagram.com/${item.user}/?hl=en`}
                      >
                        <p>@{item.user}</p>
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
        <JoinModal open={modalOpen} onClose={handleModalOpen} />
      </div>
    </Layout>
  );
};

export default DetailEvent;
