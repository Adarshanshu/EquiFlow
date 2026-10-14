import React from "react";

const Education = () => {
  return (
    <div className="container" style={{ marginBottom: "8rem" }}>
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "75%" }} />
        </div>
        <div className="col-6">
          <h3 classname="mb-3">Free and open market education</h3>
          <p style={{ margin: "2rem" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="mx-5 mb-5" style={{ textDecoration: "none" }}>
            Versity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p style={{ margin: "2rem" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries
          </p>
          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
