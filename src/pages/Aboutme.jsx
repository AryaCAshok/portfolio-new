import React from 'react'
import profileImage from '../assets/profilepic.jpg'
import './about.css'

function Aboutme() {
  return (
    <>
    <div className='container-fluid about' style={{marginLeft:"180px",marginTop:"30px",padding:"5px",borderRadius:"10px",marginBottom:"30px",boxShadow:"box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;"}}>
     <div className='row container'>
     <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12'>
        <img 
        style={{height:"200px",width:"250px",marginLeft:"20px",borderRadius:"10px"}}
        src={profileImage} alt="" />
     </div>
     <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12'style={{marginLeft:"-200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{color:"grey",fontFamily:"cursive",borderBottom:"2px solid gray",textAlign:"center"}} >About me</h1>
      <p style={{textAlign:"justify",padding:"20px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates esse sint fugiat voluptatum veniam. Maiores mollitia assumenda quis porro dolore dolorum, id perspiciatis blanditiis natus, provident temporibus rerum autem.
      </p>
     </div>
     </div>
    </div>
    </>
  )
}

export default Aboutme