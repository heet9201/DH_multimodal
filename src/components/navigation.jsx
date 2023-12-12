import React from "react";
import { useNavigate } from "react-router-dom";
// import { MdOutlineArrowBack } from "react-icons/md";
export const Navigation = (props) => {
  let navigate = useNavigate();
  return (

    
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
      
          <img src="../img/logo2.png" style={{height:"50px",width:"60px", marginLeft:"-250px",marginTop:"5px"}}></img>
          <a className="navbar-brand page-scroll" href="#page-top">
            
            Humanoids
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                History
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Artisans
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Facts
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Newsletters
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Making Process
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
