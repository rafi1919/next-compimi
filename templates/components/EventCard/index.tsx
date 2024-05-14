import Link from "next/link"
import React from "react"
import {FaMapPin, FaFilter} from 'react-icons/fa'
import { Button} from '@/templates/components/Buttons'

const Dummy=()=>{
    return(
        <div className="bg-slate-600 rounded-xl w-full h-[300px]">

        </div>
    )
}


interface EventProps {
    location: string
    name?: string
}

const EventCard =({location, name}:EventProps)=> {

    const pathName = name? name.toLocaleLowerCase().replace(/\s+/g, '+') : '';

    return(
        <div className="event card py-3">
            <Dummy />
            <div className="text-white py-3">
                <p className="text-[32px] font-semibold">{name}</p>
                <p className="text-md font-light">4 mei - 5 mei 2024</p>
                <p className="text-md font-light flex"><FaMapPin /> {location}</p>
            </div>
            <Link href={`./detailevent/${pathName}`}>
                <Button text="Read More..." />
            </Link>
        </div>
    )
}

export default EventCard