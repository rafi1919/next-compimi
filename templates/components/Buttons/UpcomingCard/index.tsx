import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  date: string;
}

const upcomingCard = ({ title, date }: CardProps) => {
  return (
    <Link href="/detailevent/6682be639a169af5761f28cd">
      <div className=" h-8 w-8 rounded-full bg-leaf text-dark font-semibold border-dark border-2 text-sm flex items-center justify-center absolute">
        <p>{date}</p>
      </div>
      <div className="w-full px-3 py-1 rounded-full  text-dark font-semibold border-dark border-2 text-sm">
        <p className="text-right">{title}</p>
      </div>
    </Link>
  );
};
export default upcomingCard;
