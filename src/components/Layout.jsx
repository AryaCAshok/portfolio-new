import React, { useState } from 'react'

import Home from '../pages/Home'
import './layout.css'
import Menu from './Menu'


function Layout() {
  const [toggle,setToggle]=useState(true)

  //change toggle
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
   <>
   <div className="sidebar-section">
    <div className={toggle? "sidebar-toggle sidebar":"sidebar"}>

      <div className="sidebar-toggle-icons">
        
       <p onClick={handleToggle}>
        {
          toggle? ( <i class="fa-solid fa-square-caret-left fa-2x text-white"></i>)
          :(<i class="fa-regular fa-square-caret-right fa-2x text-white"></i>)
        }
      
       </p>
      </div>
      <Menu toggle={toggle}/>
      </div>
      
    <div className="container">
   <Home/>

    </div>
   
   </div>
   </>
  )
}

export default Layout