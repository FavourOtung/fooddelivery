import React from 'react'


const Header = () => {
  return (
      <div className='flex sm:flex-col lg:flex-row justify-center items-center w-50% h-auto bg-primary my-4 rounded-lg text-white text-xs'>

        <div className='flex flex-col m-7 lg:items-start sm:items-center' >
          <span className='text-xl font-bold'>Get Discount Voucher</span>
          <span className='text-xl font-bold mb-2'>Up To 20%</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do
          Doloremque et amet itaque facilis veritatis </p>
        </div>

        <div >
          <img className='max-w-[200px]' src='/images/girlnewest.png' alt='photo'/>
        </div>

      </div>
  )
}

export default Header