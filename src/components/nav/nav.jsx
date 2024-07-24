import React from 'react'
import { IoSearch } from "react-icons/io5";

const Nav = () => {
  return (
    <div className='block lg:hidden xl:block md:hidden sm:hidden text-xs w-auto'>
         <div className='flex justify-between items-center'>
        <span className='text-xl font-bold'>Hello, Favour</span>
        <div className='bg-white p-2 px-10 rounded-lg flex gap-2 items-center
        transition ease-in-out duration-700 transform hover:scale-105'>
          <p className='text-primary text-lg'><IoSearch /></p>
          <input className='w-52 outline-none' placeholder='What do you want to eat today...'/>
        </div>
      </div>
    </div>
       
  )
}

export default Nav