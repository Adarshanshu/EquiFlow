import React, { useEffect, useState } from "react";
import api from "../api.js";
import VerticalGraph from "./VerticalGraph.jsx";

const money = (value) => Number(value || 0).toLocaleString("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    api.get("/allHoldings")
      .then(({ data }) => {
        if (active) setAllHoldings(data);
      })
      .catch(() => {
        if (active) setError("Could not load holdings. Check that the backend and MongoDB are running.");
      });

    return () => { active = false; };
  }, []);

  const invested = allHoldings.reduce((total, stock) => total + stock.avg * stock.qty, 0);
  const currentValue = allHoldings.reduce((total, stock) => total + stock.price * stock.qty, 0);
  const profitLoss = currentValue - invested;
  const profitPercent = invested ? (profitLoss / invested) * 100 : 0;
  const chartData = {
    labels: allHoldings.map((stock) => stock.name),
    datasets: [{
      label: "Stock price",
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: "rgba(65, 132, 243, 0.55)",
      borderColor: "rgba(65, 132, 243, 1)",
      borderWidth: 1,
    }],
  };

  return (
    <section className="portfolio-page">
      <h3 className="title">Holdings <span className="muted">({allHoldings.length})</span></h3>
      {error && <p role="alert">{error}</p>}

      <div className="order-table portfolio-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const profitClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || stock.name || index}>
                  <td className="instrument-name">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{money(stock.avg)}</td>
                  <td>{money(stock.price)}</td>
                  <td>{money(curValue)}</td>
                  <td className={profitClass}>{money(pnl)}</td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row portfolio-totals">
        <div className="col"><h5>{money(invested)}</h5><p>Total investment</p></div>
        <div className="col"><h5>{money(currentValue)}</h5><p>Current value</p></div>
        <div className="col">
          <h5 className={profitLoss >= 0 ? "profit-text" : "loss-text"}>
            {money(profitLoss)} ({profitPercent.toFixed(2)}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>
      {allHoldings.length > 0 && <VerticalGraph data={chartData} />}
    </section>
  );
};

export default Holdings;
