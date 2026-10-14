import React from "react";

const Pricing = () => {
  return (
    <div className="container" style={{ marginBottom: "10rem" }}>
      <div className="row">
        <div className="col-4">
          <h3 className="mb-4">Unbeatable Pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>
          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1>
                <i class="fa-solid fa-indian-rupee-sign"></i>0
              </h1>
              <p>
                Free equity delivery and <br></br>direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              {" "}
              <h1 classNme="mb-3">
                <i class="fa-solid fa-indian-rupee-sign"></i>20
              </h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
