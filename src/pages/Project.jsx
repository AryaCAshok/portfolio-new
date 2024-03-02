import React from "react";
import "./project.css";
// import Spin from "react-reveal/Spin";

import videoplayer from "./assets/video-player.png"
import counter from './assets/counter.jpg'
import restaurant from './assets/restaurant.jpg'
import ekart from './assets/ekart.jpg'
import netflix from './assets/netflix.jpg'

const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
         RECENT PROJECTS
        </h2>
        <hr />
       
        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Full stack</span> */}
                  <img
                    src={videoplayer}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React js</span>
                  <span className="card-detail-badge">JSON Server</span>
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Media Player
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/AryaCAshok/Media-Player-Frontend.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Mobile App</span> */}
                  <img
                    src={counter}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>

                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Counter</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/AryaCAshok/Counter-redux.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Backend</span> */}
                  <img
                src={restaurant}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  

                 
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Restaurant</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/AryaCAshok/Restaurant-Redux.git">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Mobile App</span> */}
                  <img
                    src={ekart}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>

                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Counter</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/AryaCAshok/ekart-Redux.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Mobile App</span> */}
                  <img
                    src={netflix}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>

                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Netflix</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/AryaCAshok/Netflix-India.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          {/* </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Project