import React from "react";
import { holdings } from "../data/data.js";

const invested = holdings.reduce((sum, row) => sum + row.quantity * row.average, 0);
const currentValue = holdings.reduce((sum, row) => sum + row.quantity * row.ltp, 0);
const profitLoss = currentValue - invested;
const formatCompact = (value) => `${(value / 1000).toFixed(2)}k`;

const Summary = () => (
  <>
    <div className="username"><h6>Hi, User!</h6><hr className="divider" /></div>
    <div className="section">
      <span><p>Equity</p></span>
      <div className="data">
        <div className="first"><h3>3.74k</h3><p>Margin available</p></div>
        <hr />
        <div className="second"><p>Margins used <span>0</span></p><p>Opening balance <span>3.74k</span></p></div>
      </div>
      <hr className="divider" />
    </div>
    <div className="section">
      <span><p>Holdings ({holdings.length})</p></span>
      <div className="data">
        <div className="first"><h3 className={profitLoss >= 0 ? "profit" : "loss-text"}>{formatCompact(profitLoss)} <small>{profitLoss >= 0 ? "+" : ""}{((profitLoss / invested) * 100).toFixed(2)}%</small></h3><p>P&amp;L</p></div>
        <hr />
        <div className="second"><p>Current Value <span>{formatCompact(currentValue)}</span></p><p>Investment <span>{formatCompact(invested)}</span></p></div>
      </div>
      <hr className="divider" />
    </div>
  </>
);

export default Summary;
