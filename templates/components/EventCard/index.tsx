import Link from "next/link";
import React from "react";
import { FaMapPin, FaFilter } from "react-icons/fa";
import { Button } from "@/templates/components/Buttons";
import Tags from "@/templates/components/Tags";

const Dummy = () => {
  return (
    <div className="bg-slate-600 rounded-md h-full">
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
    <div className="event card relative rounded-lg bg-red-400 shadow-md h-[300px] w-[400px]">
      <Dummy />
      <div className="absolute bottom-0 p-4 backdrop-blur-sm  w-full">
        <p className="text-md font-bold text-white">{name}</p>
        <p className="text-sm text-white">4 mei - 5 mei 2024</p>
        <p className="text-xs flex text-white">
          <FaMapPin /> {city}, {location}
        </p>
        <div className="flex gap-2 py-2">
          <Tags text="Hobby" />
          <Tags text="Games" />
        </div>
        <Link href={`./detailevent/${id}`}>
          <Button text="Read More..." />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
