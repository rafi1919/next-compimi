import React, {useState} from 'react'
import Profile from "@/templates/components/Profile"
import Sidebar from "@/templates/components/Sidebar"



interface EventProps{
    children:React.ReactNode
}


const Layout:React.FC<EventProps>=({children})=>{


    return(
        <div className="w-full h-screen" >
            <div className="grid grid-cols-12 w-full ">
                <div className="col-span-2 h-[90vh]">
                    <Sidebar />
                    </div>
                <div className="col-span-6 ">
                        {children}
                  </div>
                <div className="col-span-4 ">
                        <Profile />
                </div>
                
            </div>
        </div>
    )
}

export default Layout