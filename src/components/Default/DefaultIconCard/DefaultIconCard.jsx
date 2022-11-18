import './DefaultIconCard.scss';

import PropTypes from 'prop-types';

const DefaultIconCard = (IconComponent) => ({ cardColor, iconColor }) => {
  return (
    <div style={{ backgroundColor: cardColor }} className="icon-card">
      <IconComponent color={iconColor} />
    </div>
  );
};

DefaultIconCard.propTypes = {
  cardColor: PropTypes.string,
  iconColor: PropTypes.isRequired,
};

export default DefaultIconCard;
