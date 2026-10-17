import React from "react";
import { holdings } from "../data/data.js";

const money = (value) => value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Holdings = () => {
  const invested = holdings.reduce((total, row) => total + row.quantity * row.average, 0);
  const current = holdings.reduce((total, row) => total + row.quantity * row.ltp, 0);
  const profit = current - invested;
  const change = (profit / invested) * 100;

  return (
    <section className="portfolio-page">
      <h3 className="title">Holdings <span className="muted">({holdings.length})</span></h3>
      <div className="order-table portfolio-table">
        <table>
          <thead><tr>
            <th>Instrument</th><th>Qty.</th><th>Avg. cost</th><th>LTP</th><th>Cur. val</th><th>P&amp;L</th><th>Net chg.</th><th>Day chg.</th>
          </tr></thead>
          <tbody>{holdings.map((row) => {
            const value = row.quantity * row.ltp;
            const pnl = value - row.quantity * row.average;
            return <tr key={row.name}>
              <td className="instrument-name">{row.name}</td><td>{row.quantity}</td><td>{money(row.average)}</td><td>{money(row.ltp)}</td><td>{money(value)}</td>
              <td className={pnl >= 0 ? "profit" : "loss"}>{money(pnl)}</td>
              <td className={pnl >= 0 ? "profit" : "loss"}>{((pnl / (row.quantity * row.average)) * 100).toFixed(2)}%</td>
              <td className={row.dayChange >= 0 ? "profit" : "loss"}>{row.dayChange.toFixed(2)}%</td>
            </tr>;
          })}</tbody>
        </table>
      </div>
      <div className="row portfolio-totals">
        <div className="col"><h5>{money(invested)}</h5><p>Total investment</p></div>
        <div className="col"><h5>{money(current)}</h5><p>Current value</p></div>
        <div className="col"><h5 className={profit >= 0 ? "profit-text" : "loss-text"}>{money(profit)} ({change.toFixed(2)}%)</h5><p>Overall P&amp;L</p></div>
      </div>
    </section>
  );
};

export default Holdings;
