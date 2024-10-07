import Link from "next/link";
import React from "react";
import { FaMapPin, FaFilter } from "react-icons/fa";
import { Button } from "@/templates/components/Buttons";
import Tags from "@/templates/components/Tags";

const Dummy = () => {
  return (
    <div className="bg-slate-600 rounded-md h-[200px] w-[200px]">
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

const EventCard2 = ({ location, name, id, city }: EventProps) => {
  // const pathName = name ? name.toLocaleLowerCase().replace(/\s+/g, "+") : "";

  return (
    <div className="event card p-3 rounded-lg bg-white flex shadow-md">
      <Dummy />
      <div className="text-dark px-3">
        <p className="text-[32px] font-bold text-indigo">{name}</p>
        <p className="text-md ">4 mei - 5 mei 2024</p>
        <p className="text-md flex">
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

export default EventCard2;
