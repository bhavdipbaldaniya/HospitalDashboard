"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./revenue.module.css";

const data = [
  { month: "Department Name", visits: 30000 },
  { month: "Department Name", visits: 45000 },
  { month: "Department Name", visits: 20000 },
  { month: "Department Name", visits: 50000 },
  { month: "Department Name", visits: 18000 },
  { month: "Department Name", visits: 32000 },
  { month: "Department Name", visits: 31000 },
];

const CustomTooltip = ({ active, payload, coordinate }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className={styles.tooltipContainer}
          style={{ left: coordinate.x, top: coordinate.y - 50 }}
        >
          <div className={styles.tooltipBox}>
            {`${(payload[0].value / 1000).toFixed(0)}K`}
          </div>
          <div className={styles.tooltipArrow}></div>
        </div>
      );
    }
    return null;
  };

const DepartmentChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={styles.main_div_data_Graph_data}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          onMouseMove={(state) => {
            if (state && state.activeTooltipIndex !== undefined) {
              setActiveIndex(state.activeTooltipIndex);
            }
          }}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
          <XAxis axisLine={false} tickLine={false} dataKey="month" />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) =>
                value === 0 ? "0" : `${(value / 1000).toFixed(0)}K`
              }
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="visits"
            barSize={30}
            shape={(props) => {
              const { x, y, width, height, index } = props;
              return (
                <path
                  d={`
                    M ${x},${y + height} 
                    L ${x},${y + 8} 
                    Q ${x},${y} ${x + 8},${y} 
                    L ${x + width - 8},${y} 
                    Q ${x + width},${y} ${x + width},${y + 8} 
                    L ${x + width},${y + height} 
                    Z
                  `}
                  fill={index === activeIndex ? "#003B3E" : "#17AE7D"}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentChart;
