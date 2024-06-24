import Link from "next/link";
import React from "react";
import { FaMapPin, FaFilter } from "react-icons/fa";
import { Button } from "@/templates/components/Buttons";

const Dummy = () => {
  return (
    <div className="bg-slate-600 rounded-md w-full h-[300px]">
      <img
        src="../../banner.jpg"
        alt="banner"
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  );
};

interface EventProps {
  id: string;
  name: string;
  location: string;
  city: string;
}

const EventCard = ({ location, name, id, city }: EventProps) => {
  // const pathName = name ? name.toLocaleLowerCase().replace(/\s+/g, "+") : "";

  return (
    <div className="event card p-3  rounded-lg bg-white">
      <Dummy />
      <div className="text-dark py-3">
        <p className="text-[32px] font-bold text-indigo">{name}</p>
        <p className="text-md ">4 mei - 5 mei 2024</p>
        <p className="text-md flex">
          <FaMapPin /> {city}, {location}
        </p>
      </div>
      <Link href={`./detailevent/${id}`}>
        <Button text="Read More..." />
      </Link>
    </div>
  );
};

export default EventCard;
