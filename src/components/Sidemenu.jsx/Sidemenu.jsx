import React from 'react'
import { FaCartFlatbed } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { TbMessageStar } from "react-icons/tb";
import { MdMyLocation } from "react-icons/md";

const SidemenuLinks=[
  {
    id: 1,
    name: "Dashboard",
    link: "/#",
    icon: <MdMyLocation />
  },
  {
    id: 2,
    name: "Food Order",
    link: "/#",
    icon: <FaCartFlatbed />
  },
  {
    id: 3,
    name: "Favourite",
    link: "/#",
    icon: <TbMessageStar />
  },
  {
    id: 4,
    name: "Message",
    link: "/#",
    icon: <MdOutlineMessage />
  },
  {
    id: 5,
    name: "Order History",
    link: "/#",
    icon: <LuHistory />
  },
  {
    id: 6,
    name: "Bills",
    link: "/#",
    icon: <MdFoodBank />
  },
  {
    id: 7,
    name: "Setting",
    link: "/#",
    icon: <IoMdSettings />
  }
]


const Sidemenu = () => {
  return (
    <div className='bg-white flex flex-col p-6 items-center text-sm w-56'>

        <span className='font-bold pb-5 text-xl flex'>GoMeal
          <p className='text-primary'>.</p></span>

        {/*sidemenu links section*/}
        <div className='links'>
          <ul>
            {SidemenuLinks.map(({id, name, link, icon}) => (
              <li key={id} className='w-full p-3 px-6 my-3 text-gray-500
              hover:bg-primary hover:text-white hover: rounded-md 
              flex gap-3 items-center'>
                <p className='text-xl'>{icon}</p><a href='{link}'>{name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='w-44 h-36 bg-primary text-white p-4 py-3
        rounded-lg flex flex-col gap-1'>
          <span className='m-2'>
            Upgrade your Account to Get Free Voucher</span>
          <button className='w-24 bg-white text-black p-2
          rounded-md text-xs font-semibold'>Upgrade</button>
        </div>
      
    </div>
  )
}

export default Sidemenu