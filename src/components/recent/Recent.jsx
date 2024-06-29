import React from 'react'
import { FaHeart } from "react-icons/fa";

const Recent = () => {
  return (
    <div className='text-xs mt-7'>
        <div className='flex justify-between items-center mb-5'> 
            <span className='text-sm font-bold'>Recent Order</span>
            <p className='text-primary'>view all ›</p>
        </div>

        <div className='flex'>

            <div className='bg-white w-1/3 mr-3 py-5 rounded-lg'>
                <div className='flex justify-end items-end w-full'>
                <p className='pr-5 text-gray-300 text-base'><FaHeart /></p>
                </div>
                <div className='px-5 flex justify-center'>
                    <img className='max-w-[140px]' src='/images/pepperonipizza.png'/>
                </div>

                <div className='flex flex-col gap-1 items-center justify-center'>
                    <span>Pepperoni Pizza</span>
                    <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                    <span className='text-gray-500'>4.97km 21 min</span>
                </div>
            </div>

            <div className='bg-white w-1/3 mr-3 py-5 rounded-lg'>
                <div className='flex justify-end items-end w-full'>
                    <p className='pr-5 text-gray-300 text-base'><FaHeart /></p>
                </div>
                <div className='px-5 flex justify-center'>
                    <img className='max-w-[140px]' src='/images/japanramen.png'/>
                </div>

                <div className='flex flex-col gap-1 items-center justify-center'>
                    <span>Japan Ramen</span>
                    <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                    <span className='text-gray-500'>4.97km 21 min</span>
                </div>
            </div>

            <div className='bg-white w-1/3 mr-3 py-5 rounded-lg'>
                <div className='flex justify-end items-end w-full'>
                <p className='pr-5 text-gray-300 text-base'><FaHeart /></p>
                </div>
                
                <div className='px-5 flex justify-center'>
                    <img className='max-w-[140px]' src='/images/friedrice.png'/>
                </div>

                <div className='flex flex-col gap-1 items-center justify-center'>
                    <span>Fried Rice</span>
                    <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                    <span className='text-gray-500'>4.97km 21 min</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Recent