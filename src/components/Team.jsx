import React from "react";

export const Team = (props) => {
  
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title" style={{marginBottom:"-100px"}}>
          <h2>Newsletters</h2>
         <br></br>
        </div>
        <div style={{marginTop:"160px"}} >
        {props.data
  ? props.data.map((d, i) => (
      <div key={i} >
        <h4 style={{ textAlign: "left",padding:"10px" }}>
        <a
              href={d.link}
              style={{
                color: "darkblue",
                textDecoration: "none",
                transition: "color 0.3s",
                ":hover": { color: "blue" },
              }}
            >
              {d.name}
            </a>
        </h4>
      </div>
    ))
  : "loading"}


        </div>
      </div>
    </div>
  );
};
