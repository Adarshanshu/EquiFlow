import React, { useState } from "react";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ name, mode, onSubmit, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    if (Number(quantity) < 1 || Number(price) <= 0) {
      setError("Enter a quantity of at least 1 and a price greater than 0.");
      return;
    }

    setSaving(true);
    setError("");
    try {
      await onSubmit({ name, qty: quantity, price, mode });
      onClose();
    } catch {
      setError("Could not place the order. Check that the backend and MongoDB are running.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="order-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form className="order-modal" id="buy-window" onSubmit={submit} aria-labelledby="order-modal-title">
        <header className={mode === "BUY" ? "order-modal-header buy-header" : "order-modal-header sell-header"}>
          <div>
            <h2 id="order-modal-title">{mode === "BUY" ? "Buy" : "Sell"} {name}</h2>
            <p>Regular order - NSE</p>
          </div>
          <button className="order-modal-close" type="button" onClick={onClose} aria-label="Close order form">x</button>
        </header>

        <div className="order-modal-fields">
          <label>
            Quantity
            <input type="number" min="1" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} autoFocus />
          </label>
          <label>
            Price (INR)
            <input type="number" min="0.01" step="0.05" value={price} onChange={(event) => setPrice(event.target.value)} />
          </label>
        </div>

        <div className="order-modal-footer">
          <span>Order value <strong>INR {(Number(quantity || 0) * Number(price || 0)).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</strong></span>
          <div className="order-modal-buttons">
            <button className="order-cancel" type="button" onClick={onClose}>Cancel</button>
            <button className={mode === "BUY" ? "order-submit buy-submit" : "order-submit sell-submit"} type="submit" disabled={saving}>
              {saving ? "Placing..." : `Place ${mode.toLowerCase()} order`}
            </button>
          </div>
        </div>
        {error && <p className="order-modal-error" role="alert">{error}</p>}
      </form>
    </div>
  );
};

export default BuyActionWindow;
