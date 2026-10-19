import { useMemo, useState } from "react";
import "./pricing.css";

const feeRows = [
  { charge: "Brokerage", delivery: "₹0", intraday: "0.03% or ₹20/order, whichever is lower", futures: "0.03% or ₹20/order, whichever is lower", options: "₹20 per executed order" },
  { charge: "STT / CTT", delivery: "0.1% on buy and sell", intraday: "0.025% on sell", futures: "0.05% on sell", options: "0.15% on sell premium" },
  { charge: "NSE transaction charge", delivery: "0.00307%", intraday: "0.00307%", futures: "0.00183%", options: "0.03553% on premium" },
  { charge: "GST", delivery: "18% of brokerage + SEBI + transaction charges", intraday: "18% of brokerage + SEBI + transaction charges", futures: "18% of brokerage + SEBI + transaction charges", options: "18% of brokerage + SEBI + transaction charges" },
  { charge: "SEBI charges", delivery: "₹10 per crore", intraday: "₹10 per crore", futures: "₹10 per crore", options: "₹10 per crore" },
  { charge: "Stamp duty", delivery: "0.015% on buy", intraday: "0.003% on buy", futures: "0.002% on buy", options: "0.003% on buy" },
];

const money = (value) => `₹${(Number.isFinite(value) ? value : 0).toFixed(2)}`;

function calculate({ segment, buy, sell, quantity }) {
  const buyTurnover = buy * quantity;
  const sellTurnover = sell * quantity;
  const turnover = buyTurnover + sellTurnover;
  const rates = {
    delivery: { brokerage: 0, sttBuy: 0.001, sttSell: 0.001, txn: 0.0000307, stamp: 0.00015 },
    intraday: { brokerage: 0.0003, sttBuy: 0, sttSell: 0.00025, txn: 0.0000307, stamp: 0.00003 },
    futures: { brokerage: 0.0003, sttBuy: 0, sttSell: 0.0005, txn: 0.0000183, stamp: 0.00002 },
    options: { brokerage: 0, sttBuy: 0, sttSell: 0.0015, txn: 0.0003553, stamp: 0.00003 },
  }[segment];
  const brokerage = segment === "options"
    ? (buy > 0 ? 20 : 0) + (sell > 0 ? 20 : 0)
    : Math.min(20, buyTurnover * rates.brokerage) + Math.min(20, sellTurnover * rates.brokerage);
  const stt = buyTurnover * rates.sttBuy + sellTurnover * rates.sttSell;
  const transaction = turnover * rates.txn;
  const sebi = turnover * 0.000001;
  const stamp = buyTurnover * rates.stamp;
  const gst = (brokerage + transaction + sebi) * 0.18;
  const total = brokerage + stt + transaction + sebi + stamp + gst;
  const gross = (sell - buy) * quantity;
  return { turnover, brokerage, stt, transaction, sebi, stamp, gst, total, gross, net: gross - total };
}

function BrokerageCalculator() {
  const [segment, setSegment] = useState("intraday");
  const [buy, setBuy] = useState("100");
  const [sell, setSell] = useState("110");
  const [quantity, setQuantity] = useState("10");
  const result = useMemo(() => calculate({ segment, buy: Number(buy) || 0, sell: Number(sell) || 0, quantity: Number(quantity) || 0 }), [segment, buy, sell, quantity]);

  return (
    <section className="pricing-calculator" id="brokerage-calculator">
      <div className="pricing-section-heading">
        <h2>Brokerage calculator</h2>
        <p>Estimate the brokerage, statutory charges, and net P&amp;L for an NSE equity trade.</p>
      </div>
      <div className="calculator-card">
        <div className="calculator-form">
          <label className="pricing-field">Trade type
            <select value={segment} onChange={(event) => setSegment(event.target.value)}>
              <option value="delivery">Equity delivery</option>
              <option value="intraday">Equity intraday</option>
              <option value="futures">F&amp;O futures</option>
              <option value="options">F&amp;O options</option>
            </select>
          </label>
          <label className="pricing-field">Buy price (₹)<input type="number" min="0" step="0.05" value={buy} onChange={(event) => setBuy(event.target.value)} /></label>
          <label className="pricing-field">Sell price (₹)<input type="number" min="0" step="0.05" value={sell} onChange={(event) => setSell(event.target.value)} /></label>
          <label className="pricing-field">Quantity<input type="number" min="0" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} /></label>
        </div>
        <div className="calculator-results" aria-live="polite">
          <div className="calculator-total"><span>Estimated total charges</span><strong>{money(result.total)}</strong></div>
          <dl>
            <div><dt>Turnover</dt><dd>{money(result.turnover)}</dd></div>
            <div><dt>Brokerage</dt><dd>{money(result.brokerage)}</dd></div>
            <div><dt>STT / CTT</dt><dd>{money(result.stt)}</dd></div>
            <div><dt>Exchange transaction charges</dt><dd>{money(result.transaction)}</dd></div>
            <div><dt>SEBI charges</dt><dd>{money(result.sebi)}</dd></div>
            <div><dt>Stamp duty</dt><dd>{money(result.stamp)}</dd></div>
            <div><dt>GST</dt><dd>{money(result.gst)}</dd></div>
            <div className="calculator-net"><dt>Estimated net P&amp;L</dt><dd>{money(result.net)}</dd></div>
          </dl>
        </div>
      </div>
      <p className="pricing-disclaimer">Illustrative estimate for NSE trades. Actual charges can vary by exchange, scrip category, order execution, and applicable taxes. Options estimate assumes the premium is used as the traded value and does not include exercise-related charges.</p>
    </section>
  );
}

function ChargesList() {
  return (
    <section className="pricing-charges" id="list-of-charges">
      <div className="pricing-section-heading">
        <h2>List of charges</h2>
        <p>Common trading and account charges at a glance.</p>
      </div>
      <div className="pricing-table-wrap">
        <table className="pricing-table">
          <thead><tr><th scope="col">Charge</th><th scope="col">Equity delivery</th><th scope="col">Equity intraday</th><th scope="col">F&amp;O futures</th><th scope="col">F&amp;O options</th></tr></thead>
          <tbody>{feeRows.map((row) => <tr key={row.charge}><th scope="row">{row.charge}</th><td>{row.delivery}</td><td>{row.intraday}</td><td>{row.futures}</td><td>{row.options}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="other-charges">
        <h3>Other charges to know</h3>
        <ul>
          <li><strong>Demat (DP) charge:</strong> ₹15.34 per scrip when equity delivery shares are sold.</li>
          <li><strong>Account opening:</strong> Free for individual and minor accounts; other account types may have a fee.</li>
          <li><strong>Demat AMC:</strong> ₹300/year + GST for non-BSDA accounts; BSDA rates depend on holdings.</li>
          <li><strong>Call and trade:</strong> Additional ₹50 per order placed through a dealer.</li>
          <li><strong>Pledging:</strong> ₹30 + GST per pledge request per ISIN.</li>
          <li><strong>Payment gateway:</strong> ₹9 + GST; not charged for UPI transfers.</li>
        </ul>
      </div>
      <a className="official-charges-link" href="/pricing">Explore EquiFlow pricing <span aria-hidden="true">→</span></a>
      <p className="pricing-disclaimer">Rates shown here are illustrative estimates and may not reflect charges from an exchange, broker, or other service provider.</p>
    </section>
  );
}

export default function Brockerage() {
  return <div className="pricing-details"><nav className="pricing-shortcuts" aria-label="Pricing sections"><a href="#brokerage-calculator">Brokerage calculator</a><a href="#list-of-charges">List of charges</a></nav><BrokerageCalculator /><ChargesList /></div>;
}
