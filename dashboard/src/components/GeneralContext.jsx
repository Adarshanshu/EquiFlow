import React, { useCallback, useMemo, useState } from "react";
import api from "../api.js";
import BuyActionWindow from "./BuyActionWindow.jsx";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  openSellWindow: () => {},
  closeBuyWindow: () => {},
});

export function GeneralContextProvider({ children }) {
  const [order, setOrder] = useState(null);

  const openBuyWindow = useCallback((name) => setOrder({ name, mode: "BUY" }), []);
  const openSellWindow = useCallback((name) => setOrder({ name, mode: "SELL" }), []);
  const closeBuyWindow = useCallback(() => setOrder(null), []);

  const value = useMemo(() => ({ openBuyWindow, openSellWindow, closeBuyWindow }), [
    openBuyWindow,
    openSellWindow,
    closeBuyWindow,
  ]);

  const submitOrder = async ({ name, qty, price, mode }) => {
    await api.post("/newOrder", { name, qty: Number(qty), price: Number(price), mode });
  };

  return (
    <GeneralContext.Provider value={value}>
      {children}
      {order && (
        <BuyActionWindow
          name={order.name}
          mode={order.mode}
          onSubmit={submitOrder}
          onClose={closeBuyWindow}
        />
      )}
    </GeneralContext.Provider>
  );
}

export default GeneralContext;
