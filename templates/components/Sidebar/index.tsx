import React from "react"
import {FaHome, FaComment, FaTshirt } from 'react-icons/fa'
import Link from "next/link"


const Sidebar =()=> {

    interface NavProps {
        icon: any
        path: string
    }
    
    const NavItem:NavProps[] =[
        {
            icon: FaHome,
            path:'/'
        },
        {
            icon: FaComment,
            path:'/Chat'
        },
        {
            icon: FaTshirt,
            path:'/'
        }
    ]

    return(
        <div className="fixed border-r-[1px] border-white h-full">
            <div className="p-4">
            {
                NavItem.map((item)=> (
                    <Link href={item.path}>
                        <p className="text-xl text-white hover:text-red flex flex-col items-center p-5">
                            <span className="text-[32px]"><item.icon /></span>
                        </p>
                    </Link>
                ))
            }
            </div>
        </div>
    )
}

export default Sidebar