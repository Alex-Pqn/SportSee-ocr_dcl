import './DashboardAverageSessionsChart.scss';

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardAverageSessionsChart = ({ data }) => {
  return (
    <div className="average-sessions-chart">
      <div className="average-sessions-chart__title">
        <span>Durée moyenne des sessions</span>
      </div>
      <ResponsiveContainer
        width="100%"
        height={260}
        className="average-sessions-chart__body"
      >
        <LineChart
          data={data}
          margin={{
            top: 60,
            bottom: 10,
            right: 20,
            left: 20,
          }}
          style={{ fontWeight: 'bold', fontSize: '12px' }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          />
          <Tooltip
            formatter={(value, name, unit) => [value, unit]}
            itemStyle={{
              color: 'black',
            }}
            labelStyle={{ display: 'none' }}
          />
          <Line
            type="monotoneX"
            dataKey="sessionLength"
            stroke="white"
            unit="min"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardAverageSessionsChart;
