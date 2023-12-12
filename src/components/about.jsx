import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
     
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img style={{ marginTop: "70px" }} src={props.data ? props.data.image : "Loading"}  className="img-responsive" alt="" />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>History</h2>
                <p style={{ fontSize: "20px" }}>
                {props.data ? props.data.text : "Loading"} 
                </p>
              </div>
            </div>
          </div>
      


      </div>
    </div>
  );
};
