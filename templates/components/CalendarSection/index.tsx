import Link from "next/link";
import { Button } from "../Buttons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the basic styles
import UpcomingCard from "../Buttons/UpcomingCard";
const CalendarSection = () => {
  return (
    <div className="p-2 h-[70%]">
      <div className="relative bg-paper px-2 py-4 rounded-[40px] h-full">
        {/* <div className="h-[340px]  w-full"> */}
        <Calendar />
        {/* </div> */}
        <h1 className="relative text-dark text-[18px] font-bold">
          upcoming event
        </h1>
        <UpcomingCard title="Moeru" date="12" />
      </div>
    </div>
  );
};

export default CalendarSection;
