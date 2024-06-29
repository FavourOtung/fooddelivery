import React from 'react'
import { FaHeart } from "react-icons/fa";


const Dishes = () => {
  return (
    <div className='text-xs'>

        <div className='flex justify-between items-center'> 
            <span className='text-sm font-bold'>Popular Dishes</span>
            <p className='text-primary'>view all ›</p>
        </div>

        <div className='flex mt-7'>

            <div className='bg-white w-1/3 mr-3 pt-5 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <span className='bg-red-500 text-white px-3 py-1 rounded-r-md' >15% off</span>
                    <p className='pr-5 text-red-600 text-base'><FaHeart /></p>
                </div>

                <div className='px-5'>
                    <img src='/images/fishburger.png' alt='fish burger'/>
                </div>

                <div className='p-5 pt-0'>
                    <p className='py-2'>⭐⭐⭐⭐⭐</p>
                    <div className='flex justify-between'>
                        <div>
                            <span>Fish Burger</span>
                            <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                        </div>
                        <p className='text-white text-lg bg-primary p-4 rounded-md 
                        w-5 h-5 flex justify-center items-center'>+</p>
                    </div>
                </div>
            </div>

            <div className='bg-white w-1/3 mr-3 pt-5 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <span className='bg-red-500 text-white px-3 py-1 rounded-r-md' >15% off</span>
                    <p className='pr-5 text-gray-300 text-base'><FaHeart /></p>
                </div>

                <div className='px-5'>
                    <img src='/images/beefburger.png' alt='fish burger'/>
                </div>

                <div className='p-5 pt-0'>
                    <p className='py-2'>⭐⭐⭐⭐⭐</p>
                    <div className='flex justify-between'>
                        <div>
                            <span>Beef Burger</span>
                            <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                        </div>
                        <p className='text-white text-lg bg-primary p-4 rounded-md 
                        w-5 h-5 flex justify-center items-center'>+</p>
                    </div>
                </div>
            </div>

            <div className='bg-white w-1/3 mr-3 pt-5 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <span className='bg-red-500 text-white px-3 py-1 rounded-r-md' >15% off</span>
                    <p className='pr-5 text-gray-300 text-base'><FaHeart /></p>
                </div>

                <div className='px-5 flex items-center justify-center'>
                    <img className='h-28' src='/images/cheeseburger.png' alt='fish burger'/>
                </div>

                <div className='p-5 pt-0'>
                    <p className='py-2'>⭐⭐⭐⭐⭐</p>
                    <div className='flex justify-between'>
                        <div>
                            <span>Cheese Burger</span>
                            <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                        </div>
                        <p className='text-white text-lg bg-primary p-4 rounded-md 
                        w-5 h-5 flex justify-center items-center'>+</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Dishes