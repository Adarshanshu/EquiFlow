import React from "react";

const Hero = () => (
  <section className="pricing-hero">
    <header className="pricing-title">
      <h1>Pricing</h1>
      <p>Free equity investments and flat ₹20 intraday and F&amp;O trades</p>
    </header>
    <div className="pricing-highlights">
      <article className="pricing-highlight">
        <img src="media/images/pricingEquity.svg" alt="" />
        <h2>Free equity delivery</h2>
        <p>All equity delivery investments on NSE and BSE have ₹0 brokerage.</p>
      </article>
      <article className="pricing-highlight">
        <img src="media/images/intradayTrades.svg" alt="" />
        <h2>Intraday and F&amp;O trades</h2>
        <p>0.03% or ₹20, whichever is lower, per executed order. Flat ₹20 per executed options order.</p>
      </article>
      <article className="pricing-highlight">
        <img src="media/images/pricingEquity.svg" alt="" />
        <h2>Free direct mutual funds</h2>
        <p>Direct mutual fund investments have ₹0 commission and no DP charges.</p>
      </article>
    </div>
  </section>
);

export default Hero;
