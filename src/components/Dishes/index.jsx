import React from 'react'
import { FaHeart } from "react-icons/fa";


const Populardishes=[
    {
      id: 1,
      name: "Fish Burger",
      image: '/images/fishburger.png' 
    },
    {
      id: 2,
      name: "Beef Burger",
      image: '/images/beefburger.png'
    },
    {
      id: 3,
      name: "Cheese Burger",
      image: '/images/cheeseburger.png' 
    }
]


const Dishes = ({handleLike, liked}) => {
  return (
   
        <div className='text-xs'>
            <div className='flex justify-between items-center'> 
                <span className='text-sm font-bold'>Popular Dishes for you</span>
                <p className='text-primary'>view all ›</p>
            </div>
    
            <div className='flex mt-7 '>




            
            {Populardishes.map(({id, name, image}) => (
                    <div className='bg-white w-1/3 mr-3 pt-5 rounded-lg 
                    transition ease-in-out duration-300 transform hover:scale-105'>
                    <div className='flex justify-between items-center'>
                        <span className='bg-red-500 text-white px-3 py-1 rounded-r-md' >15% off</span>
                        <p  onClick={handleLike}  
                        className='mr-5 text-base transition ease-in-out duration-50 transform hover:scale-125'>
                            <FaHeart style={{color:liked}} className='w-5/5'/></p>
                    </div>
    
                    <div className='px-5'>
                        <img src={image}/>
                    </div>
    
                    <div className='p-5 pt-0'>
                        <p className='py-2'>⭐⭐⭐⭐⭐</p>
                        <div className='flex justify-between'>
                            <div>
                                <span>{name}</span>
                                <p className='flex font-bold text-sm'><p className='text-primary'>$</p>5.59</p>
                            </div>
                            <p className='text-white text-lg bg-primary p-4 rounded-md 
                            w-5 h-5 flex justify-center items-center'>+</p>
                        </div>
                    </div>
                </div>
            ))}
        
            </div>
        </div>        
  )
}

export default Dishes