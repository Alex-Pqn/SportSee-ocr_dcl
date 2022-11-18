import './DashboardNutrientCard.scss';

import DefaultIconCard from '../../Default/DefaultIconCard/DefaultIconCard';

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

export default DashboardNutrientCard;
