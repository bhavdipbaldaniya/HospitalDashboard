"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./hospital.module.css";
import SubHeading from "@/src/Typography/text/SubHeading";
import Heading from "@/src/Typography/text/Heading";
import Caption from "@/src/Typography/text/Caption";

const data = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 45000 },
  { month: "Mar", revenue: 14000 },
  { month: "Apr", revenue: 48000 },
  { month: "May", revenue: 30000 },
  { month: "Jun", revenue: 50000 },
  { month: "Jul", revenue: 5000 },
  { month: "Aug", revenue: 60000 },
];
const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={styles.tooltipContainer}
        style={{ left: coordinate.x, top: coordinate.y - 50 }}
      >
        <div className={styles.tooltipBox_ravenue}>
          {`${(payload[0].value / 1000).toFixed(0)}K`}
        </div>
        <div className={styles.tooltipArrow_revenue}></div>
      </div>
    );
  }
  return null;
};

const HospitalDashboardInRevenue = () => {
  return (
    <>
      <div className={styles.main_div_for_Calander_ravanu}>
        <div className={styles.Data_table_contener_ravanu}>
          <div className={styles.main_div_hading_content_table}>
            <div className={styles.main_div_data_table_content}>
              <SubHeading
                className={styles.main_div_hading_patiotant}
                text={"Revenue"}
              />
            </div>
          </div>

          <div className={styles.main_div_data_table_data_Revenue}>
            <div className={styles.main_div_for_ravanyou_manage}>
              <Heading
                className={styles.main_div_tharty_parsant}
                text={" 30%"}
              />
              <Caption
                text={" Revenue improved by 30% compared to last week."}
              />
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={data}
                margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
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
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#17ae7d"
                  fill="url(#colorGradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#13C4A3" stopOpacity={1} />
                    <stop
                      offset="100%"
                      stopColor="#13C4A3"
                      stopOpacity={0.01}
                    />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDashboardInRevenue;
