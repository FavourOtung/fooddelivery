import React from 'react'
import { IoSearch } from "react-icons/io5";


const Header = () => {
  return (
    <div className='text-xs w-auto'>

      <div className='flex justify-between items-center'>
        <span className='text-xl font-bold'>Hello, Favour</span>
        <div className='bg-white p-2 px-10 rounded-lg flex gap-2 items-center'>
          <p className='text-primary text-lg'><IoSearch /></p>
          <input className='w-52 outline-none' placeholder='What do you want to eat today...'/>
        </div>
      </div>

      <div className='flex bg-primary my-4 rounded-lg text-white '>

        <div className='w-7/12 flex flex-col m-7' >
          <span className='text-xl font-bold'>Get Discount Voucher</span>
          <span className='text-xl font-bold mb-2'>Up To 20%</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do
          Doloremque et amet itaque facilis veritatis </p>
        </div>

        <div >
          <img className='max-w-[200px]' src='/images/girlnewest.png' alt='photo'/>
        </div>

      </div>
      
    </div>
  )
}

export default Header