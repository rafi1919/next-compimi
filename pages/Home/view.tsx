import React, {useState} from 'react'
import Layout from '@/templates/components/Layout'
import { FaFilter} from 'react-icons/fa'
import SearchBar from "@/templates/components/SearchBar"
import EventCard from "@/templates/components/EventCard"
import FilterModal from "@/templates/components/Modal/FilterModal"


const Dummy=()=>{
    return(
        <div className="bg-slate-600 rounded-xl w-full h-[300px]">

        </div>
    )
}

interface EventProps{
    eventData:any
}


const HomeView:React.FC<EventProps>=({eventData})=>{
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [filteredEventData, setFilteredEventData] = useState([])

    const handleModalOpen=()=>{
        setModalOpen(!modalOpen)
    }

    
    const handleFilterApply = (location: string) => {
        const filteredData = eventData.filter((event: { location: string }) => event.location === location);
        setFilteredEventData(filteredData); 
        setModalOpen(false); // Close modal after applying filters
    };
    
    const eventsToDisplay = filteredEventData.length > 0 ? filteredEventData : eventData;

    return(
        <Layout> 
                <div className='fixed py-4 w-[760px] bg-slate-900'>
                    <SearchBar />
                    <div className=" flex justify-between items-center">
                        <h1 className=" text-white text-[32px] font-bold">today's event</h1>

                        <FaFilter className="text-white" onClick={handleModalOpen}/>
                    </div>
                <FilterModal open={modalOpen} onClose={handleModalOpen }  onApply={handleFilterApply}  />
                </div>

                <div className='mb-40'></div>

                {eventsToDisplay.map((item:any)=>(
                    <div key={item +1}>
                        <EventCard location={item.location} name={item.name} />
                    </div>
                ))}
        </Layout>
                
    )
}

export default HomeView