import React, { useEffect, useState } from "react";
import api from "../api.js";

const money = (value) => value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const changeClass = (value) => value.startsWith("-") ? "loss" : "profit";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    api.get("/allPositions")
      .then(({ data }) => {
        if (active) setPositions(data);
      })
      .catch(() => {
        if (active) setError("Could not load positions. Check that the backend and MongoDB are running.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, []);

  return (
    <section className="portfolio-page">
      <h3 className="title">Positions <span className="muted">({positions.length})</span></h3>
      {loading && <p role="status">Loading positions…</p>}
      {error && <p role="alert">{error}</p>}
      <div className="order-table portfolio-table">
        <table>
          <thead><tr><th>Product</th><th>Instrument</th><th>Qty.</th><th>Avg.</th><th>LTP</th><th>Net chg.</th><th>Day chg.</th></tr></thead>
          <tbody>{positions.map((position) => (
            <tr key={position._id || position.name}>
              <td>{position.product}</td><td className="instrument-name">{position.name}</td><td>{position.qty}</td>
              <td>{money(position.avg)}</td><td>{money(position.price)}</td>
              <td className={changeClass(position.net)}>{position.net}</td>
              <td className={changeClass(position.day)}>{position.day}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Positions;
