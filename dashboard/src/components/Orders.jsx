import React from "react";
import { orders } from "../data/data.js";

const money = (value) => value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Orders = () => (
  <section className="portfolio-page orders-page">
    <h3 className="title">Orders <span className="muted">({orders.length})</span></h3>
    <div className="order-table portfolio-table">
      <table>
        <thead><tr>
          <th>Time</th><th>Instrument</th><th>Type</th><th>Product</th><th>Qty.</th><th>Price</th><th>Status</th>
        </tr></thead>
        <tbody>{orders.map((order, index) => <tr key={`${order.name}-${index}`}>
          <td>{order.time}</td>
          <td className="instrument-name">{order.name}</td>
          <td><span className={`order-side ${order.type.toLowerCase()}`}>{order.type}</span></td>
          <td>{order.product}</td><td>{order.quantity}</td><td>{money(order.price)}</td>
          <td><span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span></td>
        </tr>)}</tbody>
      </table>
    </div>
    <p className="demo-data-note">Sample order activity for this dashboard.</p>
  </section>
);

export default Orders;
