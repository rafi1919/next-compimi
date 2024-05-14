import React from "react"

interface CardProps {
    children: React.ReactNode
}

export default function Card({children}: CardProps){

    return(
        <div className="bg-black rounded-md border-[1px] border-slate-200 p-5 m-5">
            {children}
            <p>bang</p>
        </div>
    )
}