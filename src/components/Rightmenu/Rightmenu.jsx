import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSettings5Fill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaMoneyBillTransfer } from 'react-icons/fa6';

const ordermenu= [
  {
    id: 1,
    name: "Pepperoni Pizza",
    image: '/images/pepperonipizza.png',
  },
  {
    id: 2,
    name: "Cheese Burger",
    image: '/images/cheeseburger.png',
  },
  { 
    id: 3,
    name: "Vegan Pizza",
    image: '/images/veganpizza.png',
  },
]


const Rightmenu = () => {
  return(
    <div className='bg-white w-1/4 p-5 hidden xl:block'>
      <nav className='flex justify-between items-center py-2'>
        <div className='flex items-center gap-3 text-xl'>
          <MdOutlineMessage />
          <IoMdNotificationsOutline />
          <RiSettings5Fill />
        </div> 
        <div className='px-1 pt-1 rounded-lg bg-gray-200'>
          <img className='w-7' src='/images/profile.png'/>
        </div>
      </nav>

      <div className='flex flex-col gap-3'>
        <span className='font-semibold'>Your balance</span>

        <div className='bg-primary  flex p-5 px-4 rounded-lg'>

          <div className='flex flex-col bg-white rounded-xl mr-1 px-5 py-2 justify-center'>
            <p className='text-xs'>Balance</p>
            <p className='text-lg font-bold'>$12.000</p>
          </div>

          <div className='flex flex-col items-center gap-1'>
            <div className='bg-white text-xl w-9 h-9 mx-3 rounded-lg flex items-center justify-center'>
              <FaMoneyBillTransfer/>
            </div>
            <span className='text-white text-xs'>TopUp</span>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='bg-white w-9 h-9 mx-1 text-xl rounded-lg flex items-center justify-center text-bold'>
            <FaMoneyBillTransfer/>
            </div>
            <span className='text-white text-xs'>Transfer</span>
          </div>
        </div>
      </div>

      {/*details section*/}
      <div className='flex flex-col gap-2 text-sm w-full'>
        <span className='pt-4 text-gray-500'>Your Address</span>
        <div className='flex justify-between items-center'>
          {/* <i></i> */}
          <p className='font-bold text-lg text-primary flex items-center gap-2'>
            <SlLocationPin /><p className='text-sm text-black'>Elm Street, 23</p></p>
          <button className='border border-primary transform transition ease-in-out duration-200 hover:scale-105
          hover:bg-primary hover:text-white text-primary rounded-md p-1 px-4 text-xs'>Change</button>
        </div>

        <p className='max-w-sm whitespace-normal text-xs text-gray-500'>Lorem ipsum dolor sit amet consect 
          elitasec ames Voluptatem ipsum beatae voluptate.</p>

          <div className='flex gap-3 text-xs'>
            <button className='border border-black p-1 px-4 rounded-md'>Add Details</button> 
            <button className='border border-black p-1 px-4 rounded-md'>Add Note</button>
            </div>
      </div>

      {/*Order Menu Section*/}
      
      <div className='py-5 text-xs'>
        <span className='text-lg font-bold'>Order Menu</span>

        <div>
        {ordermenu.map(({id, name, image})=>(
          <div key={id} className='flex py-3 items-center justify-between font-semibold' >
          <div className='flex items-center'>
            <img className='max-w-[50px] mr-5' src={image}/>
            <div>
              <p>{name}</p>
              <span className='text-gray-500 font-thin'>×1</span>
            </div>
          </div>

          <p className='flex'>+<p className='text-primary' >$</p>5.59</p>
        </div>
        ))}

        </div>

        {/*horizontal line */}
        <div className='border m-7 w-full'></div>

        <div className='text-xs'>
          <div className='flex justify-between'>
            <p className=' text-gray-500'>Service</p>
            <p className='flex'>+<p className='text-primary'>$</p>1.00</p>
          </div>

          <div className='flex justify-between py-5'>
            <p>Total</p>
            <p className='flex'><p className='text-primary'>$</p>202.00</p>
          </div>
        </div>

        <footer className='text-xs flex flex-col gap-4'>
          <div className='bg-gray-200 flex border p-2 px-5  
            justify-between items-center border-primary rounded-lg'>
            <div className='bg-primary h-10 w-10 rounded-lg flex items-center justify-center'>
              <p className='bg-white h-3 w-5 text-primary rounded-sm flex items-center justify-center'><RiCoupon3Fill /></p></div>
            <p>Have a coupon code?</p>
            <p className='text-lg'>›</p>
          </div>

          <button className='bg-primary p-3 rounded-md text-white
          hover:text-primary hover:bg-white border-primary border-2
          transition ease-in-out duration-200 transform hover:scale-105'>
            Checkout</button>
        </footer>


      </div>
    </div>
  )
}

export default Rightmenu