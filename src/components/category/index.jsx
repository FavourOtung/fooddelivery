import React from 'react'
import { GiFriedFish } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { PiHamburgerFill } from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";

const category=[
    {
        id: 1,
        image: "**",
        name: "Bakery",
        icon: <GiCupcake />
    },
    {
        id: 1,
        image: "**",
        name: "Burger",
        icon: <PiHamburgerFill />
    },
    {
        id: 1,
        image: "**",
        name: "Beverage",
        icon: <BiSolidCoffeeTogo />
    },
    {
        id: 1,
        image: "**",
        name: "Chicken",
        icon: <GiChickenOven />
    },
    {
        id: 1,
        image: "**",
        name: "Pizza",
        icon: <FaPizzaSlice />
    },
    {
        id: 1,
        image: "**",
        name: "Seafood",
        icon: <GiFriedFish />
    },
    
]

const Category = () => {
  return (
    <div className='text-xs font-poppins mt-7'>
        <div className='flex justify-between items-center'> 
            <span className='text-sm font-bold'>Category</span>
            <p className='text-primary'>view all ›</p>
        </div>

        <div className='flex justify-between gap-2 mt-5 mb-5'>
            {category.map(({id, name, link, icon}) => (
              <div className='flex flex-col justify-center items-center bg-white h-24 w-24 rounded-lg
              transition ease-in-out duration-200 transform hover:scale-110'
               key={id} >
                <div className='w-18 h-18 text-5xl text-secondary' >{icon}</div>
                <p className='text-gray-500'>{name}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Category