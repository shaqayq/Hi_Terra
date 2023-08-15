import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import SelectBox from "./SelectBox";
import "../../style/dashboard/chart.css";

export default function Chart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Yield",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Paddy",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Durian",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Coffe",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#b2455bcc",
      },
    ],
  };

  const selectOptions = {
    yield: ["Yeid", "Production"],
    product: ["TM", "AI 73", "TM General", "NPK"],
    paddy: ["Paddy", "Durain", "Coffe"],
    country: ["Malysia", "India"],
    date: ["Yearly", "Quater", "Monthly"],
  };
  return (
    <>
      <div className="bar-chart">
        <div className="filter">
          <div className="select-box">
            <SelectBox options={selectOptions.yield} msg="Yield" />
            <SelectBox options={selectOptions.product} msg="Products" />
            <SelectBox options={selectOptions.paddy} msg="Paddy" />
            <SelectBox options={selectOptions.country} msg="Country" />
          </div>

          <div>
            <SelectBox options={selectOptions.date} msg="Date" />
          </div>
        </div>
        <div id="chart">
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
}
