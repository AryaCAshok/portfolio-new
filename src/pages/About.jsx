import React from "react";
import "./about1.css";
// import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      {/* <Jump> */}
        <div className="about" id="about" >
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://static-prod.adweek.com/wp-content/uploads/2023/02/spo-marketers-custom-algorithm-2023-652x367.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Iam Arya C ,a passionate MERN stack developer eager to embrak on my journey in the world of webdevelopment.Iam constantly learning new things and keeping up with the latest trends.
                
              </p>
            </div>
          </div>
        </div>
      {/* </Jump> */}
    </>
  );
};

export default About;