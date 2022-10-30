import './IconCard.scss';

const DefaultIconCard = (IconComponent) => ({
  iconColor,
  cardColor,
}) => {
  return (
    <div style={{backgroundColor: cardColor}} className="icon-card">
      <IconComponent color={iconColor} />
    </div>
  );
};

export default DefaultIconCard;
