import React from "react";
import "./support.css";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

export default function Hero() {
  return (
    <section className="support-hero">
      <div className="support-hero-inner">
        <div className="support-hero-topline">
          <h1>Support Portal</h1>
          <a href="https://support.zerodha.com/">Track tickets</a>
        </div>
        <div className="support-hero-content">
          <div className="support-search-column">
            <h2>Search for an answer or browse help topics to create a ticket</h2>
            <label className="support-search-label" htmlFor="support-search">Search support articles</label>
            <input id="support-search" type="search" placeholder="Eg: how do I activate F&amp;O, why is my order getting rejected..." />
            <nav className="support-quick-links" aria-label="Popular help topics">
              {quickLinks.map((item) => <a key={item} href="https://support.zerodha.com/">{item}</a>)}
            </nav>
          </div>
          <aside className="support-featured">
            <h2>Featured</h2>
            <ol>
              <li><a href="https://support.zerodha.com/">Current Takeovers and Delisting – January 2024</a></li>
              <li><a href="https://support.zerodha.com/">Latest Intraday Leverages – MIS &amp; CO</a></li>
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
