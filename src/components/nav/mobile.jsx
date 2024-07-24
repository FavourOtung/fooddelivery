import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Mobile = ({openSideMenu, openRightMenu}) => {
  return (
    
    <div className='hidden xl:hidden lg:block md:block sm:block text-xs w-auto'>
      <div className='flex justify-between items-center'>
      <GiHamburgerMenu onClick={openSideMenu} className='block lg:hidden xl:hidden text-xl'/>

        <span className='text-xl font-bold'>Hello, Favour</span>
        
        <div className='flex justify-between items-center gap-2'>
        <IoSearch className='text-lg'/>
        <FaUser onClick={openRightMenu} className='w-4 h-4 text-gray-800'/>
        </div>
       
      </div>
        
        
    </div>
    
  )
}

export default Mobile