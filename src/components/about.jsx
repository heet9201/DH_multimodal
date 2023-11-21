import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img style={{ marginTop: "70px" }} src="img/bandhani2.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>History</h2>
              <p style={{ fontSize: "20px" }}>The term bandhani is derived from the Sanskrit verbal root bandh (“to bind, to tie”). Today most Bandhani making centres are situated in Gujarat, Rajasthan, Sindh, Punjab region and in Tamil Nadu where it’s known as Sungudi.

                Earliest evidence of Bandhani dates back to Indus Valley Civilization where dyeing was done as early as 4000 B.C. The earliest example of the most pervasive type of Bandhani dots can be seen in the 6th century paintings depicting the life of Buddha found on the wall of Cave 1 at Ajanta.

                Bandhani is believed to have originated from the city of Ajrakhpur in Gujarat in the 6th century BC. The name "Bandhani" is derived from the Sanskrit word "bandhana", which means "to bind". The technique of tie-dye fabrics is believed to have been brought to India by Persian traders who travelled along the Silk Roads.

                This art finds its mention in Alexander the great time texts about the beautiful printed cottons of India. As per evidence in Historical Texts, the first Bandhani saree was worn at the time of Bana Bhatt`s Harshacharita in a royal marriage.

                It was believed that wearing a Bandhani saree can bring a good future to a bride. Ajanta walls stand for the evidences of these Bandhani sarees
              </p>
              <h3>Also known as</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{ fontSize: "20px" }}>
                    {/* {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"} */}
                    <li>Bandhej</li>
                    <li>Pilia</li>

                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
