import React, {useState} from 'react'
import Sidemenu from './components/Sidemenu'
import Rightmenu from './components/Rightmenu'
import Header from './components/header'
import Dishes from './components/Dishes'
import Recent from './components/recent'
import Category from './components/category'



const App = () => {
//handling likes
  const [liked, setLiked] = useState("gray");

  const handleLike =() =>{  
    liked=="gray"? setLiked('red'): setLiked('gray');  
  }

  return (
    <div className='overflow-x-hidden flex bg-gray-300 font-poppins'>
      <div className='fixed'>
      <Sidemenu />
      </div>
      
      
      <div className='ml-56 p-7 w-4/5 mainblock bg-gray-100 w-60vw'>
      <Header/>
      <Category/>
      <Dishes liked={liked} handleLike={handleLike}  />
      <Recent/>
      </div>

      <Rightmenu/>
      
    </div>
  )
}

export default App