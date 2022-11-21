import './Dashboard.scss';

import {
  getUserService,
  getDefaultUserId,
} from '../../config/api/services/user.service.config.js';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import DashboardAside from '../../components/Dashboard/DashboardAside/DashboardAside';
import DashboardWelcome from '../../components/Dashboard/DashboardWelcome/DashboardWelcome';
import DashboardActivityChart from '../../components/Dashboard/DashboardActivityChart/DashboardActivityChart';
import DashboardPerformanceChart from '../../components/Dashboard/DashboardPerformanceChart/DashboardPerformanceChart';
import DashboardScoreChart from '../../components/Dashboard/DashboardScoreChart/DashboardScoreChart';
import DashboardAverageSessionsChart from '../../components/Dashboard/DashboardAverageSessionsChart/DashboardAverageSessionsChart';
import DashboardNutrientCard from '../../components/Dashboard/DashboardNutrientCard/DashboardNutrientCard';

import DefaultLoader from '../../components/Default/DefaultLoader/DefaultLoader';

import IconEnergy from '../../components/Icon/IconEnergy/IconEnergy';
import IconChicken from '../../components/Icon/IconChicken/IconChicken';
import IconApple from '../../components/Icon/IconApple/IconApple';
import IconCheeseburger from '../../components/Icon/IconCheeseburger/IconCheeseburger';

/**
 * Dashboard
 * Display the dashboard page
 */
const Dashboard = () => {
  const navigate = useNavigate();

  let { userId } = useParams();
  if (!userId) userId = getDefaultUserId();
  userId = parseInt(userId);

  // User
  const [user, updateUser] = useState();
  const [isUserLoading, updateUserLoading] = useState(true);

  // User Activity
  const [userActivity, updateUserActivity] = useState({});
  const [isUserActivityLoading, updateUserActivityLoading] = useState(true);

  // User Average Sessions
  const [userAverageSessions, updateUserAverageSessions] = useState({});
  const [
    isUserAverageSessionsLoading,
    updateUserAverageSessionsLoading,
  ] = useState(true);

  // User Performance
  const [userPerformance, updateUserPerformance] = useState({});
  const [isUserPerformanceLoading, updateUserPerformanceLoading] = useState(
    true
  );

  useEffect(getData, [navigate, userId]);

  function getData() {
    const redirectToErrorPage = () => navigate('/error');

    // User
    getUserService()
      .findOne(userId)
      .then((user) => {
        updateUser(user);
        updateUserLoading(false);
      })
      .catch((err) => {
        console.error(err);
        redirectToErrorPage();
      });

    // User Activity
    getUserService()
      .findOneActivity(userId)
      .then((userActivity) => {
        updateUserActivity(userActivity);
        updateUserActivityLoading(false);
      })
      .catch((err) => {
        console.error(err);
        redirectToErrorPage();
      });

    // User Average Sessions
    getUserService()
      .findOneAverageSessions(userId)
      .then((userAverageSessions) => {
        updateUserAverageSessions(userAverageSessions);
        updateUserAverageSessionsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        redirectToErrorPage();
      });

    // User Performance
    getUserService()
      .findOnePerformance(userId)
      .then((userPerformance) => {
        updateUserPerformance(userPerformance);
        updateUserPerformanceLoading(false);
      })
      .catch((err) => {
        console.error(err);
        redirectToErrorPage();
      });
  }

  return (
    <div className="dashboard">
      {/* Aside */}
      <aside className="dashboard__aside">
        <DashboardAside />
      </aside>
      <section className="dashboard__body">
        {/* Welcome */}
        <div className="dashboard__welcome">
          {!isUserLoading && user ? (
            <DashboardWelcome userName={user.infos.firstName} />
          ) : (
            <DefaultLoader message="Chargement de vos informations" />
          )}
        </div>
        <div className="dashboard__charts">
          <div className="dashboard__charts-left">
            <div className="dashboard__charts-left__top">
              {/* Activity Chart */}
              <div className="dashboard__activity-chart">
                {!isUserActivityLoading && userActivity ? (
                  <DashboardActivityChart data={userActivity.sessions} />
                ) : (
                  <DefaultLoader message="Chargement de votre activité quotidienne" />
                )}
              </div>
            </div>
            <div className="dashboard__charts-left__bottom">
              {/* Average Sessions */}
              <div className="dashboard__average-sessions-chart dashboard__charts-left__bottom__container chart-container">
                {!isUserAverageSessionsLoading && userAverageSessions ? (
                  <DashboardAverageSessionsChart
                    data={userAverageSessions.sessions}
                  />
                ) : (
                  <DefaultLoader message="Chargement de votre moyenne de sessions" />
                )}
              </div>
              {/* Performance Chart */}
              <div className="dashboard__performance-chart dashboard__charts-left__bottom__container chart-container">
                {!isUserPerformanceLoading && userPerformance ? (
                  <DashboardPerformanceChart data={userPerformance.data} />
                ) : (
                  <DefaultLoader message="Chargement de vos performances" />
                )}
              </div>
              {/* Score Chart */}
              <div className="dashboard__score-chart dashboard__charts-left__bottom__container chart-container">
                {!isUserLoading && user.todayScore ? (
                  <DashboardScoreChart value={user.todayScore} />
                ) : (
                  <DefaultLoader message="Chargement de votre score quotidien" />
                )}
              </div>
            </div>
          </div>
          <div className="dashboard__charts-right">
            {!isUserLoading && user ? (
              // Nutrient Cards
              <div className="dashboard__nutrient-cards">
                <DashboardNutrientCard
                  icon={IconEnergy}
                  iconColor="#FF0000"
                  iconCardColor="rgb(255, 0, 0, 0.1)"
                  title="Calories"
                  data={user.keyData.calorieCount}
                  unit="kCal"
                />
                <DashboardNutrientCard
                  icon={IconChicken}
                  iconColor="#4AB8FF"
                  iconCardColor="rgb(74, 184, 255, 0.1)"
                  title="Proteines"
                  data={user.keyData.proteinCount}
                  unit="g"
                />
                <DashboardNutrientCard
                  icon={IconApple}
                  iconColor="#FDCC0C"
                  iconCardColor="rgb(253, 204, 12, 0.1)"
                  title="Glucides"
                  data={user.keyData.carbohydrateCount}
                  unit="g"
                />
                <DashboardNutrientCard
                  icon={IconCheeseburger}
                  iconColor="#FD5181"
                  iconCardColor="rgb(253, 81, 129, 0.1)"
                  title="Lipides"
                  data={user.keyData?.lipidCount}
                  unit="g"
                />
              </div>
            ) : (
              <DefaultLoader message="Chargement de votre nutrition" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
