import React from "react";
import "./techstack1.css";
//  import RubberBand from "react-reveal/RubberBand";
//  import Fade from "react-reveal/Fade"
import { stackList } from "../utils/stacklist";
const Techstack1 = () => {
  return (
    <>
    <div className="container techstack" id="techstack">

          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center ">
          Including programming Languages, frameworks, databses, front-end  and back-end tools, and APIs
          </p>
        
        <div className="row">
          {stackList.map((tech) => (
            // <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                         
                          <p className='me-2'>{tech.icon}</p>
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            // </Fade>
          ))}
        </div>
      </div>
    </>
  );
};
export default Techstack1;