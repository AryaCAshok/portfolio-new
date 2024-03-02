import React,{useState} from 'react'
import './mobile.css'
import { Link} from 'react-scroll';
function Mobile() {
    const [open,setopen]=useState(false)

    const handleOpen=()=>{
        setopen(!open);
    }
  return (
   <>
   <div className="mobile-nav">
    <div className="mobile-nav-header">
    {open ? (<i class="fa-solid fa-compass"></i>): (<span className='mobile-nav-title'><i class="fa-solid fa-bars me-2"  ></i></span>)}
    <span className='mobile-nav-title'>Portfolio</span>
    </div>
    <div className="mobile-nav-menu">
    <div className='nav-items'>
            <div style={{ color: "white", marginTop: "30px", marginLeft: "25px"  }} className='icons'>
              <div style={{marginTop:"20px"}}>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
                <i class="fa-solid fa-house me-3"></i>
                Home
                </Link>
                
             
              </div>
              <div style={{marginTop:"20px"}}>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-address-card me-3"></i>
               About
                </Link>
                
              
              </div>
              <div style={{marginTop:"20px"}} >
              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-laptop-code me-3"></i>
                Tech Stack
                </Link>
              
              </div>
              <div style={{marginTop:"20px"}} >
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-laptop-code me-3"></i>
                Projects
                </Link>
              
              </div>
              
              <div style={{marginTop:"20px"}} className='style'>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
              <i class="fa-solid fa-user me-3"></i>
              
                Contacts
                </Link>
              
              </div>
            </div>
          </div>
    </div>
   </div>

   </>
  )
}

export default Mobile