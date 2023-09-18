"use client"
import Done from "@/components/Done";
import InProgress from "@/components/InProgress";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Revised from "@/components/Revised";
import Sidebar from "@/components/Sidebar";
import ToDo from "@/components/ToDo";
import { useState } from "react";
import {BsFillArrowRightCircleFill} from "react-icons/bs"


export default function Home() {
  const [open, setopen] = useState(false)
  return (
    <div className="flex">
      <div className={` ${open?"absolute":"hidden"} sm:block w-1/5 min-w-[200px] z-10`}>
        <Sidebar />
        
      </div>
      <div className="text-white absolute z-20 sm:hidden top-[17rem]" onClick={()=>{setopen(!open)}}><BsFillArrowRightCircleFill size={50}/></div>
      <div className="flex-1">
        <Navbar />
        <PageHeader />
        <div className="grid grid-cols-2 gap-4 sm:flex m-4  ">
          <div className="w-[80%] sm:w-1/4 m-4">
            <ToDo />
          </div>
          <div className="w-[80%] sm:w-1/4 m-4">
            <InProgress />
          </div>
          <div className="w-[80%] sm:w-1/4 m-4">
            <Done />
          </div>
          <div className="w-[80%] sm:w-1/4 m-4">
            <Revised />
          </div>
        </div>
        
      </div>
    </div>
  );
}
