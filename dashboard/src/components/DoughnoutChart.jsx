import React from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnoutChart = ({ data }) => (
  <div className="watchlist-chart-canvas">
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        radius: "100%",
        cutout: "42%",
        plugins: { legend: { display: false } },
      }}
    />
  </div>
);

export default DoughnoutChart;
