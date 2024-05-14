import React from "react"

interface CardProps {
    text:string,
    onClick?:()=>void
}

export default function Button  ({ text, onClick }:CardProps)  {
    return (
        <button className="w-full p-3 rounded-xl bg-green-600 text-white" onClick={onClick}>{text}</button>

    );
};