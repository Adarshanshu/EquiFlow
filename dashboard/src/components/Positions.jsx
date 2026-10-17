import React from "react";
import { positions } from "../data/data.js";

const money = (value) => value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Positions = () => (
  <section className="portfolio-page">
    <h3 className="title">Positions <span className="muted">({positions.length})</span></h3>
    <div className="order-table portfolio-table">
      <table>
        <thead><tr><th>Product</th><th>Instrument</th><th>Qty.</th><th>Avg.</th><th>LTP</th><th>P&amp;L</th><th>Chg.</th></tr></thead>
        <tbody>{positions.map((position) => {
          const pnl = (position.ltp - position.average) * position.quantity;
          return <tr key={position.name}>
            <td>{position.product}</td><td className="instrument-name">{position.name}</td><td>{position.quantity}</td>
            <td>{money(position.average)}</td><td>{money(position.ltp)}</td><td className={pnl >= 0 ? "profit" : "loss"}>{money(pnl)}</td>
            <td className={pnl >= 0 ? "profit" : "loss"}>{(((position.ltp - position.average) / position.average) * 100).toFixed(2)}%</td>
          </tr>;
        })}</tbody>
      </table>
    </div>
  </section>
);

export default Positions;
