import './DashboardNutrientCard.scss';

import PropTypes from 'prop-types';

import DefaultIconCard from '../../Default/DefaultIconCard/DefaultIconCard';

/**
 * Dashboard Nutrient Card
 * Display a nutriend card
 * @param {Function} icon
 * @param {string} iconColor
 * @param {string} iconCardColor
 * @param {string} title
 * @param {number} data
 * @param {string} unit
 */
const DashboardNutrientCard = ({
  icon,
  iconColor,
  iconCardColor,
  title,
  data,
  unit,
}) => {
  const IconComponent = icon;

  const IconCard = DefaultIconCard(IconComponent);

  return (
    <div className="nutrient-card">
      <div className="nutrient-card__icon">
        <IconCard iconColor={iconColor} cardColor={iconCardColor} />
      </div>
      <div className="nutrient-card__body">
        <div className="nutrient-card__body__data">
          {data}
          {unit}
        </div>
        <div className="nutrient-card__body__title">{title}</div>
      </div>
    </div>
  );
};

DashboardNutrientCard.propTypes = {
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconCardColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default DashboardNutrientCard;
