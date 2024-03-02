import React, { useState } from 'react'
import './contact.css'
import { uploadMessage } from '../services/allAPI';

function Contact() {
  const [message,setMessage]=useState({
    name:"",
    emailid:"",
    usermessage:""
  })

  const handleAdd=()=>{
    const {name,emailid,usermessage}=message;
    if(!name || !emailid || !usermessage ){
      alert('pleas fill the form completely')
    }
    else{
      // uploadMessage(message);
      alert("Your message send successfully")
    }
  }
  return (
    <>
    <div className=" contact" id='contact'>
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img 
                className='image'
                src="https://st2.depositphotos.com/1265075/7581/i/450/depositphotos_75818865-stock-photo-web-contact-us-concept.jpg" alt="contact" />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
        
            <div className="card2 d-flex card border-0 px-4 py-2">
              <div className='row'>
                <div className='row'>

               
              
              <h6 className='d-flex align-items-center justify-content-center fs-3'>Connect </h6>
              </div>
            <div className="row px-3 mb-4">
              <div className="line">
              {/* <small className='or text-center'>OR</small> */}
              <div className="line">

              </div>
              <div className="row px-3">
               <input 
               onChange={(e)=>setMessage({...message,name:e.target.value})}
               type="text" 
               name="name" 
               placeholder='write your name'
               className='mb-3'
             />
              </div>
              <div className="row px-3">
               <input
               onChange={(e)=>setMessage({...message,emailid:e.target.value})} 
               type="text" 
               name="email" 
               placeholder='Enter  your email Address'
               className='mb-3'
             />
              </div>
              <div className="row px-3">
               <textarea
                onChange={(e)=>setMessage({...message,usermessage:e.target.value})}
               type="text" 
               name="name" 
               placeholder='write your message'
               className='mb-3'
             />
              </div>
              <div className="row px-3">
                <button className='button'onClick={handleAdd}>SEND MESSAGE</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact