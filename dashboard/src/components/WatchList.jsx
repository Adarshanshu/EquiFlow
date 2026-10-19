import React, { useContext, useMemo, useState } from "react";
import { watchlist } from "../data/data.js";
import GeneralContext from "./GeneralContext.jsx";
import DoughnoutChart from "./DoughnoutChart.jsx";

const chartColors = ["#4184f3", "#56b48a", "#f0ad4e", "#df5b4d", "#8b78c6", "#42a7b8", "#d777a6", "#8c9b59", "#68788c"];

const WatchList = () => {
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);
  const filtered = useMemo(
    () => watchlist.filter(({ name }) => name.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );
  const chartData = {
    labels: watchlist.map((stock) => stock.name),
    datasets: [{
      label: "Price",
      data: watchlist.map((stock) => stock.price),
      backgroundColor: chartColors,
      borderColor: "#fff",
      borderWidth: 2,
    }],
  };

  return (
    <aside className="watchlist-container" aria-label="Market watchlist">
      <div className="search-container">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search instruments"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {filtered.map((stock) => (
          <li className="watchlist-row" key={stock.name}>
            <div className="item">
              <span className="watchlist-symbol">{stock.name}<small>NSE</small></span>
              <div className="item-info">
                <span className={`percent ${stock.isDown ? "down" : "up"}`}>
                  {stock.percent}
                </span>
                <span className={stock.isDown ? "down" : "up"} aria-hidden="true">
                  {stock.isDown ? "\u2193" : "\u2191"}
                </span>
                <span className="price">{stock.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
            <div className="actions" aria-label={`${stock.name} actions`}>
              <button className="buy" type="button" onClick={() => openBuyWindow(stock.name)}>Buy</button>
              <button className="sell" type="button" onClick={() => openSellWindow(stock.name)}>Sell</button>
              <button className="action" type="button" aria-label="Analytics">A</button>
              <button className="action" type="button" aria-label="More options">...</button>
            </div>
          </li>
        ))}
        {filtered.length === 0 && <li className="watchlist-empty">No instruments match &quot;{query}&quot;</li>}
      </ul>

      <section className="watchlist-chart" aria-label="Watchlist price chart">
        <h3>Watchlist prices</h3>
        <DoughnoutChart data={chartData} />
      </section>

      <nav className="watchlist-number" aria-label="Watchlist pages">
        <ul>
          {[1, 2, 3, 4, 5].map((page) => (
            <li key={page} className={activePage === page ? "active" : ""}>
              <button type="button" onClick={() => setActivePage(page)} aria-current={activePage === page ? "page" : undefined}>
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button className="settings" type="button" aria-label="Watchlist settings">{"\u2699"}</button>
      </nav>
    </aside>
  );
};

export default WatchList;
