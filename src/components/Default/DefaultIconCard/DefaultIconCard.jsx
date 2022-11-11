import './DefaultIconCard.scss';

const DefaultIconCard = (IconComponent) => (props) => {
  return (
    <div style={{ backgroundColor: props.cardColor }} className="icon-card">
      <IconComponent color={props.iconColor} />
    </div>
  );
};

export default DefaultIconCard;
