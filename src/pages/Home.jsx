import React from 'react'
import resume from './assets/resume.pdf'
import Typewriter from 'typewriter-effect';


function Home() {
  return (
    <>
    <div className='container-fluid' style={{height:"250px",marginLeft:"150px",marginTop:"50px"}} id="home">
      <div className='container' >

      </div>
      <h3 style={{color:"white"}}>Hi </h3>
       <h2 style={{color:"white"}}>Iam <span style={{color:"orange"}}>ARYA C</span> </h2>
      <h1 style={{color:"white"}}>
      <Typewriter
  options={{
    strings: ['Full Stack Developer', 'Mern Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='mt-3 '>
        {/* <button className='btn btn-primary  me-3 button'>Hire me</button> */}
        <button className='btn btn-warning'><a href={resume} download='resume' style={{textDecoration:"none"}}>My Resume </a></button>
      </div>
    </div>
    </>
  )
}

export default Home