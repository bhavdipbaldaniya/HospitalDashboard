import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import styles from "./revenue.module.css";
  const data = [
    { date: "01", revenue: 0 },
    { date: "02", revenue: 25000 },
    { date: "03", revenue: 35000 },
    { date: "04", revenue: 35000 },
    { date: "05", revenue: 40000 },
    { date: "06", revenue: 50000 },
    { date: "07", revenue: 60000 },
    { date: "08", revenue: 60000 },
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
  const TotalChart = () => {
    return (
      <div style={{ paddingBottom: "20px", paddingTop: " 20px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis axisLine={false} tickLine={false} dataKey="date" />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${(value / 1000).toFixed(0)}K`
              }
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              
              // cursor={{ fill: "transparent" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#16a34a"
              strokeDasharray="5 5"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default TotalChart;
  