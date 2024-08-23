import React from "react";

function Achievements() {
  return (
    <section id="Achievements"> 
        <h1 className="py-3 achi-txt display-3">Our Achievements</h1>
      <div className="py-5 ">
        <div className="row mt-3 gap-5 justify-content-center">
          <div className="col-12 col-md-3">
            <i className="bi bi-currency-rupee"></i>
            <h1 className="display-2 my-5">250+</h1>
            <p> Financial Products</p>
          </div>
          <div className="col-12 col-md-3">
            <i className="bi bi-envelope-paper-heart-fill"></i>
            <h1 className="display-2 my-5">1000+</h1>
            <p> Happy Clients</p>
          </div>
          <div className="col-12 col-md-3">
            <i className="bi bi-gear-fill"></i>
            <h1 className="display-2 my-5">12+</h1>
            <p> Decade of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
