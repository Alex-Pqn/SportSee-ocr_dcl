import './DashboardWelcome.scss';

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

export default DashboardWelcome;
