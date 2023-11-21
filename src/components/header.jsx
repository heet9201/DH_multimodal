import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div>
      <img style={{zIndex:"999", opacity:"0.4",width:"100%",height:"720px"}} src="img/bandhani1.jpg" className="img-responsive" alt="" />
        <div className="overlay">
          <div className="container">
            <div className="row">
             <div style={{zIndex:"99", marginTop:"-800px",color:"black"}} className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                <b style={{fontSize:"60px"}}>  Gujarat's Famous Bandhani</b>
                  <span></span>
                </h1>
               <b style={{fontSize:"30px"}}> <p>{props.data ? props.data.paragraph : "Loading"}</p></b>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div> 
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
