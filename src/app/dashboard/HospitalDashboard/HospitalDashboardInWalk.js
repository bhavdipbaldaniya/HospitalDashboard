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
import styles from "./hospital.module.css";
import SubHeading from "@/src/Typography/text/SubHeading";
import Regular from "@/src/Typography/text/Regular";
import Caption from "@/src/Typography/text/Caption";
import Heading from "@/src/Typography/text/Heading";
import Small from "@/src/Typography/text/Small";

const data = [
  { month: "Jan", visits: 30000 },
  { month: "Feb", visits: 31000 },
  { month: "Mar", visits: 20000 },
  { month: "Apr", visits: 37000 },
  { month: "May", visits: 18000 },
  { month: "Jun", visits: 32000 },
  { month: "Jul", visits: 31000 },
  { month: "Aug", visits: 30000 },
  { month: "Sep", visits: 33000 },
  { month: "Oct", visits: 19000 },
  { month: "Nov", visits: 31000 },
  { month: "Dec", visits: 29000 },
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

const HospitalDashboardInWalk = () => {
  return (
    <>
      <div className={styles.main_div_data_Graph_data}>
        <div className={styles.main_div_for_ravanyou_manage}>
          <Heading className={styles.main_div_tharty_parsant} text={"24%"} />
          <Caption
            text={
              "Patient visits have decreased by 24% compared to last month."
            }
          />
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#E5E7EB"
              strokearray="3 3"
            />
            <XAxis axisLine={false} tickLine={false} dataKey="month" />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent", cursor: "pointer" }}
            />
            <Bar
              dataKey="visits"
              fill="#17AE7D"
              barSize={30}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default HospitalDashboardInWalk;
