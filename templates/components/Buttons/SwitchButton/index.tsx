import React from "react"

interface CardProps {
    days:string,
    active: boolean,
    onClick:()=>void
}

export default function SwitchButton  ({ days, active, onClick }:CardProps)  {
    return (
        <button 
            className={`w-full p-3 rounded-xl transition-300  ${active ? 'bg-green-600 text-white' : 'border-white-[1px] bg-white text-green-600'}`}
            onClick={onClick}
        >
            {days}
        </button>
    );
};