import React from 'react'
import Sidemenu from './components/Sidemenu.jsx/Sidemenu'
import Rightmenu from './components/Rightmenu.jsx/Rightmenu'
import Header from './components/header.jsx/Header'
import Category from './components/category.jsx/Category'
import Dishes from './components/Dishes.jsx/Dishes'
import Recent from './components/recent/Recent'


const App = () => {
  return (
    <div className='overflow-x-hidden flex bg-gray-300 font-poppins'>
      <Sidemenu />
      
      <div className='p-7 w-full mainblock bg-gray-100 w-60vw'>
      <Header/>
      <Category/>
      <Dishes/>
      <Recent/>
      </div>

      <Rightmenu/>
      
    </div>
  )
}

export default App