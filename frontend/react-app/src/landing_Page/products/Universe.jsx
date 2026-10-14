import React from "react";

const partners = [
  { name: "Zerodha Fund House", logo: "media/images/zerodhaFundhouse.png", description: "Simple and transparent index funds to help you save for your goals.", href: "https://www.zerodhafundhouse.com/" },
  { name: "Streak", logo: "media/images/streakLogo.png", description: "Create and backtest systematic trading strategies without coding.", href: "https://streak.tech/" },
  { name: "Sensibull", logo: "media/images/sensibullLogo.svg", description: "Build options strategies, analyze positions, and explore market data.", href: "https://sensibull.com/" },
  { name: "Smallcase", logo: "media/images/smallcaseLogo.png", description: "Invest in diversified baskets of stocks and ETFs.", href: "https://smallcase.zerodha.com/" },
  { name: "Tijori", description: "Research stocks, sectors, and supply chains with detailed insights.", href: "https://www.tijorifinance.com/" },
  { name: "Ditto", logo: "media/images/dittoLogo.png", description: "Get personalized advice on life and health insurance, with no spam.", href: "https://joinditto.in/" },
];

export default function Universe() {
  return (
    <section className="products-universe" id="investment-offerings">
      <div className="universe-heading">
        <h2>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience with our partner platforms.</p>
      </div>
      <div className="universe-grid">
        {partners.map((partner) => (
          <a className="universe-card" href={partner.href} target="_blank" rel="noreferrer" key={partner.name}>
            {partner.logo ? <img src={partner.logo} alt={partner.name} loading="lazy" /> : <span className="universe-wordmark">{partner.name}</span>}
            <p>{partner.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
