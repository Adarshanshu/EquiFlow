import React from "react";

const Footer = () => (
  <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
    <div className="container border-top p-10">
      <div className="row" style={{ marginBottom: "4rem" }}>
        <div className="col">
          <img src="media/images/logo.png" alt="EquiFlow" style={{ width: "50%" }} />
          <p>© 2026, EquiFlow. All rights reserved.</p>
        </div>
        <div className="col">
          <p>company</p>
          <a href="/about" style={{ textDecoration: "none", color: "black" }}>About</a><br />
          <a href="/about" style={{ textDecoration: "none", color: "black" }}>Our philosophy</a><br />
          <a href="/product" style={{ textDecoration: "none", color: "black" }}>Products</a><br />
          <a href="/product" style={{ textDecoration: "none", color: "black" }}>Open source</a><br />
          <a href="/signup" style={{ textDecoration: "none", color: "black" }}>Create an account</a><br />
        </div>
        <div className="col">
          <p>support</p>
          <a href="/suport" style={{ textDecoration: "none", color: "black" }}>Contact us</a><br />
          <a href="/suport" style={{ textDecoration: "none", color: "black" }}>Support portal</a><br />
          <a href="/suport" style={{ textDecoration: "none", color: "black" }}>Help topics</a><br />
        </div>
        <div className="col">
          <p>account</p>
          <a href="/signup" style={{ textDecoration: "none", color: "black" }}>Open an account</a><br />
          <a href="/login" style={{ textDecoration: "none", color: "black" }}>Log in</a><br />
          <a href="/pricing" style={{ textDecoration: "none", color: "black" }}>Pricing</a><br />
        </div>
      </div>
      <div className="mt-5 text-sm text-muted">
        <p>EquiFlow is a software project that provides tools for exploring investment and portfolio information. It is not a broker, exchange, depository, or investment adviser.</p>
        <p>Information on this platform is for educational purposes and is not investment advice. Market investments are subject to risk. Make decisions based on your own research and consult a qualified professional when needed.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
