import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>What is Bandhani</h2>
      
        </div>
        <div className="row" style={{display:"flex",flexDirection:"row",marginLeft:"-150px",gap:"100px"}}>
          <div className="col1" style={{width:"700px",justifyItems:"left"}}>
              <p style={{fontSize:"20px"}}>Bandhani tying is often a family trade, and the women of these families work at home to tie patterns. Mandavi, Bhuj, Anjar, Jamnagar, Morbi, Rajkot, Deesa are some of the main towns in Gujarat, where Bandhani is created. The city of Jamnagar, located in the Gulf of Kutch, in Gujarat is well known for its red Bandhani. Dyeing process of Bandhani is carried out extensively in this city, as the water of this area is known to give a particular brightness to colors, specifically reds and maroons.

        </p>
          </div>
          <div className="col2" style={{}}>
          <img src="img/about.jpg" className="img-responsive" alt="" />{" "}

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
    </div>
  );
};
