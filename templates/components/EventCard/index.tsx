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
  location: string;
  name?: string;
}

const EventCard = ({ location, name }: EventProps) => {
  const pathName = name ? name.toLocaleLowerCase().replace(/\s+/g, "+") : "";

  return (
    <div className="event card p-3 border-dark border-2 rounded-lg ">
      <Dummy />
      <div className="text-dark py-3">
        <p className="text-[32px] font-bold text-indigo">{name}</p>
        <p className="text-md ">4 mei - 5 mei 2024</p>
        <p className="text-md flex">
          <FaMapPin /> {location}
        </p>
      </div>
      <Link href={`./detailevent/${pathName}`}>
        <Button text="Read More..." />
      </Link>
    </div>
  );
};

export default EventCard;
