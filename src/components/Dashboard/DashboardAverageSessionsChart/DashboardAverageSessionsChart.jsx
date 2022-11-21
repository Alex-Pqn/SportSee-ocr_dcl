import './DashboardAverageSessionsChart.scss';

import PropTypes from 'prop-types';

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Dashboard Average Sessions Chart
 * Display the user average sessions
 * @param {Object} data
 * @param {string} data.day
 * @param {number} data.sessionLength
 */
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

DashboardAverageSessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired,
      }.isRequired
    )
  ).isRequired,
};

export default DashboardAverageSessionsChart;
