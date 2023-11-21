import React from "react";

export const Services = (props) => {
  return (
    <>
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Well Known Artisans</h2>
          <p>

          </p>
        </div>
        <div className="row">
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"} */}
            <div style={{display:"flex",msFlexDirection:"row",gap:"110px"}} >
          <div className="card" style={{width:"30rem"}}>
            <img className="card-img-top" src="../img/a1.jpg" alt="Card image cap" style={{width:"18rem",height:"180px",marginBottom:"10px"}}/>

            <div className="card-body">
              <b>
              <p className="card-text">Aziz Khatri is a renowned artisan from Kutch, India, who learned the art of Bandhani from his family. His mother and grandmother taught him the intricate process of tying and binding traditional patterns, while his father educated him in the art of dyeing. Aziz expanded his skills beyond his family's teachings. He received a scholarship from the All India Handicrafts Board to study natural dyeing and later trained at the Ahmedabad Textile Industries Research Association. Aziz has innovated traditional Bandhani techniques to create new patterns, and he has incorporated stitched and clamped shibori, a Japanese resist-dyeing technique, into his work.</p>
              </b> </div>
          </div>

          <div className="card" style={{width:"30rem"}}>
            <img className="card-img-top" src="../img/a2.jpg" alt="Card image cap" style={{width:"18rem",marginBottom:"10px"}}/>
            <br></br>
            <div className="card-body">
            <b> <p className="card-text">Abduljabbar Mahmadhushen Khatri, known as Jabbar Khatri, is another artisan from the Khatri community in Bhuj, Gujarat. After the devastating Bhuj earthquake in 2001, Jabbar and his brothers decided to revive their family's tradition of tie-dyeing. They were mentored by their uncles and cousins who were still in the trade. Their family is known for tying extremely fine dot patterns in a sophisticated composition style. Jabbar and his brothers have continued in this vein, with their mother, sister, and over two hundred women from their community tying the fine patterns that merge traditional and contemporary designs.</p>
          </b>  </div>
          </div>

          <div className="card" style={{width:"30rem"}}>
            <img className="card-img-top" src="../img/a3.jpg" alt="Card image cap" style={{width:"18rem",height:"180px",marginBottom:"10px"}}/>
            <br></br>
            <div className="card-body">
           <b>  <p className="card-text">Kolkata-based designer Naina Jain is known for championing the art of Bandhani. She has been instrumental in modernizing the traditional craft and making it more accessible to people of all ages. She combines Bandhani with hand embroideries from across India and marries it with craft techniques such as Kota weaving, chikankari, and Paithani, giving Bandhani a unique update.</p>
          </b>  </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
