import React, { useEffect, useState } from "react";
import api from "../api.js";

const money = (value) => Number(value || 0).toLocaleString("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    api.get("/allOrders")
      .then(({ data }) => { if (active) setOrders(data); })
      .catch(() => { if (active) setError("Could not load orders. Check that the backend and MongoDB are running."); });
    return () => { active = false; };
  }, []);

  return (
    <section className="portfolio-page orders-page">
      <h3 className="title">Orders <span className="muted">({orders.length})</span></h3>
      {error && <p role="alert">{error}</p>}
      {orders.length === 0 && !error ? (
        <div className="no-orders"><p>You haven't placed any orders yet.</p></div>
      ) : (
        <div className="order-table portfolio-table">
          <table>
            <thead><tr>
              <th>Time</th><th>Instrument</th><th>Type</th><th>Product</th><th>Qty.</th><th>Price</th><th>Status</th>
            </tr></thead>
            <tbody>{orders.map((order) => (
              <tr key={order._id}>
                <td>{order.time}</td>
                <td className="instrument-name">{order.name}</td>
                <td><span className={`order-side ${order.type.toLowerCase()}`}>{order.type}</span></td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{money(order.price)}</td>
                <td><span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Orders;
