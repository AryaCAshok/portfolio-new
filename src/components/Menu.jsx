import React from 'react'
import profileImage from '../assets/profilepic.jpg'
import { container } from 'react-bootstrap'
import './layout.css'
import { Link} from 'react-scroll';


function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profilepic ">
            <container className="d-flex justify-content-center">
              <img
                style={{ height: "150px", width: "150px", borderRadius: "90px", marginTop: "10px", verticalAlign: "middle" }}
                src={profileImage} alt="" />
            </container>
          </div>
          <div>
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
        </>
      ) :
        (
          <div>
            <div style={{ color: "white", marginTop: "30px", marginLeft: "25px" }} className='icons'>
              <div style={{marginTop:"20px"}}>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-house me-3"></i>
       
                </Link>
                
           
             
              </div>
              <div style={{marginTop:"20px"}}>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-address-card me-3"></i>
       
                </Link>
              
           
              </div>
              <div style={{marginTop:"20px"}}>
              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-laptop-code me-3"></i>
       
                </Link>
              
              
            
              </div>
              <div style={{marginTop:"20px"}}>
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-laptop-code me-3"></i>
       
                </Link>
              
              
             
              </div>
              
              <div style={{marginTop:"20px"}}>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} style={{textDecoration:"none"}}>
              <i class="fa-solid fa-user me-3"></i>
       
                </Link>
              
              
            
              </div>
            </div>
          </div>
        )
      }


    </>
  )
}

export default Menu