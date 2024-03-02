import React from 'react'
import resume from './assets/resume.pdf'
import Typewriter from 'typewriter-effect';
import './home.css'
import { Fade } from 'react-reveal'

function Home() {
  return (
    <>
    <div className='container-fluid home-container' id="home">
      <div className='container' >

      <Fade right>
      <h2 style={{color:"white"}}>Hi </h2>
       <h1 style={{color:"white"}}>Iam <span style={{color:"orange"}}>ARYA C</span> </h1>
      <h1 style={{color:"white"}}>
      <Typewriter
  options={{
    strings: ['Full Stack Developer', 'Mern Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      </Fade>
      <Fade bottom>
      <div className='mt-3 '>
        {/* <button className='btn btn-primary  me-3 button'>Hire me</button> */}
        <button className=' home-btn btn btn-warning '><a href={resume} download='resume' style={{textDecoration:"none"}}>My Resume </a></button>
      </div>
      </Fade>
    </div>
    </div>
    </>
  )
}

export default Home