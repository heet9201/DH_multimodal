import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      {props.data
  ? (
    props.data.map((d, i) => (
      <div key={i} className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{d.title}</h2>
      
        </div>
        <div className="row" style={{display:"flex",flexDirection:"row",marginLeft:"-150px",gap:"100px"}}>
          <div className="col1" style={{width:"700px",justifyItems:"left"}}>
              <p style={{fontSize:"20px"}}>
              {d.text}
        </p>
          </div>
          <div className="col2" style={{}}>
          <img src={d.icon} className="img-responsive" alt="" style={{height:"300px",width:"400px"}}/>{" "}

          </div>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div> */}
      </div>
       ))
       )
       : "loading"}
    </div>
  );
};
