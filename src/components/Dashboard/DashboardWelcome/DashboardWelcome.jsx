import './DashboardWelcome.scss';

import PropTypes from 'prop-types';

/**
 * Dashboard Welcome
 * Display a welcome message
 * @param {string} userName
 */
const DashboardWelcome = ({ userName }) => {
  return (
    <div className="welcome">
      <div className="welcome__user">
        <h1>
          Bonjour <span>{userName}</span>
        </h1>
      </div>
      <div className="welcome__recap">
        <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      </div>
    </div>
  );
};

DashboardWelcome.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default DashboardWelcome;
