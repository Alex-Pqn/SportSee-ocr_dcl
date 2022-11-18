import './DashboardPerformanceChart.scss';

import PropTypes from 'prop-types';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const DashboardPerformanceChart = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={260}
      className="performance-chart"
    >
      <RadarChart data={data} outerRadius={75}>
        <PolarGrid stroke="#FFFFFF" />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: '#FFFFFF', fontSize: 12 }}
        />

        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.9}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

DashboardPerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DashboardPerformanceChart;
