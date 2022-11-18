import './DefaultIconCard.scss';

const DefaultIconCard = (IconComponent) => ({ cardColor, iconColor }) => {
  return (
    <div style={{ backgroundColor: cardColor }} className="icon-card">
      <IconComponent color={iconColor} />
    </div>
  );
};

export default DefaultIconCard;
