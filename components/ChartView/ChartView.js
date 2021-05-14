import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  LineChart,
  BarChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  Bar,
  Brush
} from "recharts";
import SelectMenu from "../SelectMenu/SelectMenu";

const ChartView = () => {
  const [selectedChartOption, setSelectedChartOption] = useState("AreaChart");

  const chartOptions = [
    { id: "1", name: "LineChart" },
    { id: "2", name: "AreaChart" },
    { id: "3", name: "BarChart" },
  ];

  const data = [
    { name: "Page A", uv: 900, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 1800, pv: 2600, amt: 2400 },
    { name: "Page C", uv: 1100, pv: 2200, amt: 2400 },
    { name: "Page D", uv: 800, pv: 2500, amt: 2400 },
    { name: "Page E", uv: 2100, pv: 2660, amt: 2400 },
    { name: "Page F", uv: 1450, pv: 1700, amt: 2400 },
    { name: "Page G", uv: 560, pv: 2485, amt: 2400 },
    { name: "Page H", uv: 260, pv: 1487, amt: 2400 },
    { name: "Page I", uv: 660, pv: 3588, amt: 2400 },
    { name: "Page J", uv: 1576, pv: 2475, amt: 2400 },
    { name: "Page K", uv: 859, pv: 3200, amt: 2400 },
    { name: "Page L", uv: 1657, pv: 2566, amt: 2400 },
    { name: "Page M", uv: 258, pv: 1423, amt: 2400 },
    { name: "Page N", uv: 857, pv: 1564, amt: 2400 },
    { name: "Page O", uv: 2525, pv: 3562, amt: 2400 },
    { name: "Page P", uv: 1055, pv: 876, amt: 2400 },
    { name: "Page Q", uv: 1560, pv: 2530, amt: 2400 },
  ];

  const chartRenderSwitch = (param) => {
    switch (param) {
      case "AreaChart":
        return (
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FD7E14" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FD7E14" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FD7E14"
              fillOpacity={1}
              // fill="url(#colorUv)"
              fill="#FEB170"
            />
            {/* <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            /> */}
          </AreaChart>
        );
      case "LineChart":
        return (
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#FD7E14" strokeWidth={3}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3}/>
          </LineChart>
        );
      case "BarChart":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#FD7E14" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        );
      default:
        return (
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#FD7E14" strokeWidth={3}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3}/>
          </LineChart>
        );
    }
  };

  return (
    <div className="rounded-md bg-grey text-dark-textLt shadow-lg transform transition duration-200 overflow-hidden">
      <Link href="/chart">
        <div className="pt-1 pb-1 pl-3 pr-3 flex flex-row justify-between items-center transition duration-200 hover:bg-blue-antarticBlue hover:text-white-textLt cursor-pointer">
          <h1 className="text-sm font-medium">Charts</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </div>
      </Link>
      <hr></hr>

      <div className="p-1 flex flex-row flex-wrap gap-2 ">
        {/* Dropdown for select type of graph */}
        <SelectMenu options={chartOptions} setOption={setSelectedChartOption} />
      </div>

      <div className="p-2 rounded text-xs">
        <ResponsiveContainer width="100%" height={400}>
          {chartRenderSwitch(selectedChartOption)}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartView;
