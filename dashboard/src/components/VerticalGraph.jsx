import React from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: true, text: "Holdings by market price" },
  },
  scales: { y: { beginAtZero: true } },
};

const VerticalGraph = ({ data }) => (
  <div className="holdings-chart">
    <Bar options={options} data={data} />
  </div>
);

export default VerticalGraph;
