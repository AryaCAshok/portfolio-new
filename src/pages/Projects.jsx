import React from 'react'
import './project.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import videoplayer from "./assets/video-player.png"
import counter from './assets/counter.jpg'
import restaurant from './assets/restaurant.jpg'
import ekart from './assets/ekart.jpg'

function Projects() {
  return (
    <div className=' project' id='projects'>
     <h2 className='col-12 mt-3 text-center text-warning  text-uppercase' style={{ color: "orange" }}>Projects</h2>
        <hr style={{ color: "black", width: "200px",marginLeft:"450px" }} />
        <div className='row' style={{display:"flex",justifyContent:'space-between'}}id="ads">
          <div className='col-md-4' >
            <div style={{marginTop:"50px"}} className='card'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      style={{marginTop:"0px",height:"150px",width:"100%"}}
      src={videoplayer} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center'style={{fontSize:"12px"}}>React JS<span className='ms-2 '>JSON Server</span></Card.Title>
        <Card.Text>
          
        <Card  className='d-flex align-items-center justify-content-center' style={{ width: '16rem',backgroundColor:"black" }}>
      <ListGroup variant="flush" style={{backgroundColor:"black"}}>
        <ListGroup.Item style={{backgroundColor:"black"}}className='text-white'>Media player </ListGroup.Item>
        
      </ListGroup>
    </Card>
        </Card.Text>
        <a href="https://github.com/AryaCAshok/Media-Player-Frontend.git"><Button variant="primary" className='d-flex  justify-content-center'style={{marginLeft:"90px"}}>view</Button></a>
        
      </Card.Body>
    </Card>
            </div>
   
          </div>
          <div className='col-md-4' >
            <div style={{marginTop:"50px"}}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      style={{marginTop:"0px",height:"150px",width:"100%"}}
      src={counter} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center'style={{fontSize:"12px"}}>React <span className='ms-2 '>Javascript</span> </Card.Title>
        <Card.Text>
          
        <Card  className='d-flex align-items-center justify-content-center' style={{ width: '16rem',backgroundColor:"black" }}>
      <ListGroup variant="flush" style={{backgroundColor:"black"}}>
        <ListGroup.Item style={{backgroundColor:"black"}}className='text-white'>Counter</ListGroup.Item>
        
      </ListGroup>
    </Card>
        </Card.Text>
        <a href="https://github.com/AryaCAshok/Counter-redux.git"><Button variant="primary" className='d-flex  justify-content-center'style={{marginLeft:"90px"}}>view</Button></a>
        
      </Card.Body>
    </Card>
            </div>
   
          </div>
          <div className='col-md-4' >
            <div style={{marginTop:"50px"}}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      style={{marginTop:"0px",height:"150px",width:"100%"}}
      src={restaurant} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center'style={{fontSize:"12px"}}>React.js <span className='ms-2 '>Javascript</span></Card.Title>
        <Card.Text>
          
        <Card  className='d-flex align-items-center justify-content-center' style={{ width: '16rem',backgroundColor:"black" }}>
      <ListGroup variant="flush" style={{backgroundColor:"black"}}>
        <ListGroup.Item style={{backgroundColor:"black"}}className='text-white'>Restaurant Website </ListGroup.Item>
        
      </ListGroup>
    </Card>
        </Card.Text>
        <a href="https://github.com/AryaCAshok/Restaurant-Redux.git"><Button variant="primary" className='d-flex  justify-content-center'style={{marginLeft:"90px"}}>view</Button></a>
        
      </Card.Body>
    </Card>
            </div>
   
          </div>
          <div className='col-md-4' >
            <div style={{marginTop:"50px"}}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      style={{marginTop:"0px",height:"150px",width:"100%"}}
      src={ekart} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center'style={{fontSize:"12px"}}>React.js <span className='ms-2 '>Javascript</span><span className='ms-2'>Bootstrap</span> </Card.Title>
        <Card.Text>
          
        <Card  className='d-flex align-items-center justify-content-center' style={{ width: '16rem',backgroundColor:"black" }}>
      <ListGroup variant="flush" style={{backgroundColor:"black"}}>
        <ListGroup.Item style={{backgroundColor:"black"}}className='text-white'>ekart</ListGroup.Item>
        
      </ListGroup>
    </Card>
        </Card.Text>
        <a href="https://github.com/AryaCAshok/ekart-Redux.git"><Button variant="primary" className='d-flex  justify-content-center'style={{marginLeft:"90px"}}>view</Button></a>
        
      </Card.Body>
    </Card>
            </div>
   
          </div>
        </div>
    </div>
  )
}

export default Projects