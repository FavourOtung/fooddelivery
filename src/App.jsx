import React, {useState} from 'react'
import Sidemenu from './components/Sidemenu/Sidemenu'
import Rightmenu from './components/Rightmenu/Rightmenu'
import Header from './components/header/header'
import Mobile from './components/nav/mobile'
import Dishes from './components/Dishes'
import Recent from './components/recent'
import Category from './components/category'
import Nav from './components/nav/nav'
import RightmenuMobile from './components/Rightmenu/mobile'
import Mobilesidemenu from './components/Sidemenu/mobile'



const App = () => {
  const [rightMenu, setRightMenu] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);


//handling likes
  const [liked, setLiked] = useState("gray");
  
    const handleLike =() =>{  
    liked=="gray"? setLiked('red'): setLiked('gray');  
  }

  return (
    <div className='overflow-x-hidden flex bg-gray-300 font-poppins w-auto'>
      <Sidemenu />
      <div className='p-7 w-auto bg-gray-100 w-60vw relative'>
      <Nav/>
      <Mobile
        openRightMenu={()=>setRightMenu(true)}
        openSideMenu={()=>setSideMenu(true)}
      />
      <Header/>
      <Category/>
      <Dishes liked={liked} handleLike={handleLike}  />
      <Recent/>
      </div>
      <Rightmenu/>
      {rightMenu && <RightmenuMobile closeRightMenu={setRightMenu}/>}
      {sideMenu && <Mobilesidemenu closeSideMenu={setSideMenu}/>}
      
      
      
      
      
    </div>
  )
}

export default App