import './DashboardActivityChart.scss';

import {
  BarChart,
  YAxis,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const DashboardActivityChart = ({ data }) => {
  const legendStyle = {
    fontSize: '14px',
    color: '#74798C',
    fontWeight: 'bold',
  };

  const renderLegendStyle = (text) => {
    return <span style={legendStyle}>{text}</span>;
  };

  return (
    <div className="activity-chart">
      <div className="activity-chart__title">
        <span>Activité quotidienne</span>
      </div>
      <ResponsiveContainer
        width="100%"
        height={320}
        className="activity-chart__body"
      >
        <BarChart data={data} barSize={8} style={legendStyle}>
          <Legend
            align="right"
            verticalAlign="top"
            height={80}
            formatter={renderLegendStyle}
          />
          <CartesianGrid strokeDasharray="2 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickSize={20}
            padding={{ left: -20, right: -20 }}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickSize={20}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#E60000',
            }}
            itemStyle={{
              color: 'white',
            }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: 'none' }}
          />
          <Bar dataKey="kilogram" fill="#000000" unit="Kg" name="Poids (kg)" />
          <Bar
            dataKey="calories"
            fill="#FF0000"
            unit="kCal"
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardActivityChart;
