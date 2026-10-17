// Static market examples used by the dashboard watchlist.
export const watchlist = [
  { name: "INFY", price: 1555.45, change: -1.2, volume: "2.4M" },
  { name: "ONGC", price: 276.8, change: -0.3, volume: "1.8M" },
  { name: "TCS", price: 3194.8, change: 0.8, volume: "980K" },
  { name: "KPITTECH", price: 1666.45, change: 3.5, volume: "742K" },
  { name: "QUICKHEAL", price: 608.55, change: -0.2, volume: "126K" },
  { name: "WIPRO", price: 452.1, change: 0.4, volume: "3.1M" },
  { name: "M&M", price: 2798.8, change: -0.1, volume: "619K" },
  { name: "RELIANCE", price: 1212.4, change: 1.2, volume: "4.2M" },
  { name: "HUL", price: 2417, change: -0.6, volume: "451K" },
];

export const holdings = [
  { name: "INFY", quantity: 10, average: 1380.5, ltp: 1555.45, dayChange: -0.42 },
  { name: "TCS", quantity: 5, average: 3022.4, ltp: 3194.8, dayChange: 0.81 },
  { name: "RELIANCE", quantity: 10, average: 1184.2, ltp: 1212.4, dayChange: 1.22 },
  { name: "HDFCBANK", quantity: 12, average: 1640.75, ltp: 1712.3, dayChange: 0.35 },
  { name: "ITC", quantity: 20, average: 412.6, ltp: 438.15, dayChange: -0.18 },
];

export const orders = [
  { time: "09:18:24", name: "INFY", type: "BUY", product: "CNC", quantity: 10, price: 1482.5, status: "COMPLETE" },
  { time: "10:42:07", name: "TCS", type: "BUY", product: "CNC", quantity: 5, price: 3102.0, status: "COMPLETE" },
  { time: "11:26:51", name: "RELIANCE", type: "SELL", product: "MIS", quantity: 2, price: 1212.4, status: "COMPLETE" },
  { time: "13:05:13", name: "HDFCBANK", type: "BUY", product: "CNC", quantity: 12, price: 1698.0, status: "OPEN" },
];

export const positions = [
  { product: "MIS", name: "NIFTY 50", quantity: 25, average: 22482.5, ltp: 22514.2 },
  { product: "CNC", name: "SBIN", quantity: 15, average: 812.4, ltp: 806.75 },
];
