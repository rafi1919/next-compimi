import React, {useState} from 'react'
import Layout from '@/templates/components/Layout'
import { Button } from '@/templates/components/Buttons'

const Dummy=()=>{
    return(
        <div className="bg-slate-600 rounded-xl w-full h-[300px]">

        </div>
    )
}

interface EventProps{
    eventData:any
}


const ChatView:React.FC<EventProps>=({eventData})=>{
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [filteredEventData, setFilteredEventData] = useState([])

    const handleModalOpen=()=>{
        setModalOpen(!modalOpen)
    }
    const eventsToDisplay = filteredEventData.length > 0 ? filteredEventData : eventData;

    return(
        <Layout> 
            <div className='my-4'>
                <div className='flex gap-5 p-4'>
                    <div>
                        <div className='w-[60px] h-[60px] bg-slate-600 rounded-full'></div>
                        <p className='text-white font-normal text-sm'>Comipara 2</p>
                    </div>
                </div>
               <div className='rounded-md w-full border-white border-[1px] h-[70vh] '>
                    <div className='h-full'>

                    </div>
                    <div className='grid grid-cols-10 gap-2'>
                        <div className='col-span-8'>
                            <input type='text'  className='border-2 border-gray-300 bg-white h-10 p-5  rounded-lg text-sm focus:outline-none w-full' placeholder='Type something'/>
                        </div>
                        <div className='col-span-2'>
                            <Button text='Send' />
                        </div>
                    </div>
               </div>
            </div>
        </Layout>
                
    )
}

export default ChatView