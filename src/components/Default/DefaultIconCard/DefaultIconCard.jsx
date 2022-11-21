import './DefaultIconCard.scss';

import PropTypes from 'prop-types';

/**
 * Default Icon Card
 * Display an icon card
 * @param {string} cardColor
 * @param {string} iconColor
 */
const DefaultIconCard = (IconComponent) => ({ cardColor, iconColor }) => {
  return (
    <div style={{ backgroundColor: cardColor }} className="icon-card">
      <IconComponent color={iconColor} />
    </div>
  );
};

DefaultIconCard.propTypes = {
  cardColor: PropTypes.string,
  iconColor: PropTypes.string.isRequired,
};

export default DefaultIconCard;
