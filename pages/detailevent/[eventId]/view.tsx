import { useState } from "react"
import Layout from "@/templates/components/Layout"
import {FaMapPin, FaFilter} from 'react-icons/fa'
import { Button, SwitchButton } from '@/templates/components/Buttons'
import JoinModal from "@/templates/components/Modal/JoinModal"
import { useRouter } from "next/router"

const Dummy=()=>{
    return(
        <div className="bg-slate-600 rounded-xl h-[300px] w-[50%]">

        </div>
    )
}

interface DetaiProps{
    dataEvent:any
}
const DetailEvent=({dataEvent}:DetaiProps)=>{
    const [activeDay, setActiveDay] = useState('day 1');
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const route = useRouter()

    const handleDayChange = (day) => {
        setActiveDay(day);
    };

    const handleModalOpen=()=>{
        setModalOpen(!modalOpen)
    }

    const handleJoin=()=>{
        route.push('/Chat')
    }


    return(
        <Layout>
                <div className="py-4">
                    <div className=" flex justify-between items-center">
                        <h1 className="text-white text-[32px] font-bold">{dataEvent ? dataEvent.name : null}</h1>

                        {/* <FaFilter className="text-white"/> */}
                    </div>
                    <div className="event card">
                        <div className="flex gap-2">
                            <Dummy />
                            <Dummy />
                        </div>
                        <div className="text-white py-3">
                            <p className="text-md font-light">4 mei - 5 mei 2024</p>
                            <p className="text-md font-light flex"><FaMapPin />{dataEvent ? dataEvent.location : null}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-1">
                                <SwitchButton days='day 1' active={activeDay === 'day 1'} onClick={() => handleDayChange('day 1')} />
                            </div>
                            <div className="col-span-1">
                                <SwitchButton days='day 2' active={activeDay === 'day 2'} onClick={() => handleDayChange('day 2')} />
                            </div>
                        </div>
                        <div className="py-2">
                            <Button text="JOIN" onClick={handleModalOpen}/>
                        </div>
                        <div className="bg-slate-600 rounded-xl p-4 my-2">
                            <div>
                                <p className=" p-2 rounded-t-md font-semibold bg-slate-50 w-fit">Jujutsu Kaisen</p>
                                <div className="border-[1px] border-slate-50 rounded-b-md rounded-tr-md">
                                    <div className="flex items-end justify-between text-white p-2">
                                        <p>Gojo Satoru</p>
                                        <p>@ralfiantx</p>
                                    </div>
                                    <div className="flex items-end justify-between text-white p-2">
                                        <p>Gojo Satoru</p>
                                        <p>@ralfiantx</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <JoinModal open={modalOpen} onClose={handleModalOpen } onApply={handleJoin} />
                </div>
        </Layout>
    )
}

export default DetailEvent