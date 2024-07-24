import React from 'react'
import { FaHeart } from "react-icons/fa";

const recentorder =[
    {
        id: 1,
        name: "Pepperoni Pizza",
        image: '/images/pepperonipizza.png',
    },
    {
        id: 2,
        name: "Japan Ramen",
        image: '/images/japanramen.png',
    },
    {
        id: 3,
        name: "Fried Rice",
        image: '/images/friedrice.png',
    },
]

const Recent = () => {
  return (
    <div className='text-xs mt-7'>
        <div className='flex justify-between items-center mb-5'> 
            <span className='text-sm font-bold'>Recent Order</span>
            <p className='text-primary'>view all ›</p>
        </div>

        <div className='flex flex-wrap justify-around'>

            {recentorder.map(({id, name, image})=>(
                 <div key={id} className='bg-white w-[30%] mr-2 min-w-44 py-5 mb-4 rounded-lg
                 transition ease-in-out duration-300 transform hover:scale-105'>
                 <div className='flex justify-end items-end w-full'>
                 <p className='pr-5 text-gray-300 text-base'><FaHeart /></p>
                 </div>
                 <div className='px-5 flex justify-center'>
                     <img className='max-w-[140px]' src={image}/>
                 </div>
 
                 <div className='flex flex-col gap-1 items-center justify-center'>
                     <span>{name}</span>
                     <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                     <span className='text-gray-500'>4.97km 21 min</span>
                 </div>
             </div>
            )
            )}
           

        </div>
    </div>
  )
}

export default Recent