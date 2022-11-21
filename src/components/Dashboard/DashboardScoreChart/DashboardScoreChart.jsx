import './DashboardScoreChart.scss';

import PropTypes from 'prop-types';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF0000', '#F8F8F8'];

/**
 * Dashboard Score Chart
 * Display the user score
 * @param {number} value
 */
const DashboardScoreChart = ({ value }) => {
  const todayScore = [{ value: value }, { value: 1 - value }];

  return (
    <div className="score-chart">
      <div className="score-chart__title">Score</div>
      <div className="score-chart__score">
        <span>{todayScore[0].value * 100}%</span>
        de votre objectif
      </div>
      <ResponsiveContainer
        width="100%"
        height={260}
        className="score-chart__body"
      >
        <PieChart>
          <Pie
            dataKey="value"
            data={todayScore}
            startAngle={90}
            endAngle={450}
            innerRadius={60}
            outerRadius={73}
          >
            {todayScore.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

DashboardScoreChart.propTypes = {
  value: PropTypes.number.isRequired,
};

export default DashboardScoreChart;
