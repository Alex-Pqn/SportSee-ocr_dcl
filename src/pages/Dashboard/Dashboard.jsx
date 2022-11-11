import './Dashboard.scss';

import { userService } from '../../_services/user.service';
import { useEffect, useState } from 'react';

import DashboardAside from '../../components/Dashboard/DashboardAside/DashboardAside';
import DashboardWelcome from '../../components/Dashboard/DashboardWelcome/DashboardWelcome';
import DashboardActivityChart from '../../components/Dashboard/DashboardActivityChart/DashboardActivityChart';
import DashboardPerformanceChart from '../../components/Dashboard/DashboardPerformanceChart/DashboardPerformanceChart';
import DashboardScoreChart from '../../components/Dashboard/DashboardScoreChart/DashboardScoreChart';
import DashboardNutrientCard from '../../components/Dashboard/DashboardNutrientCard/DashboardNutrientCard';

import DefaultIconCard from '../../components/Default/DefaultIconCard/DefaultIconCard';

import IconEnergy from '../../components/Icon/IconEnergy/IconEnergy';
import IconChicken from '../../components/Icon/IconChicken/IconChicken';
import IconApple from '../../components/Icon/IconApple/IconApple';
import IconCheeseburger from '../../components/Icon/Cheeseburger/IconCheeseburger';

function Dashboard() {
  const userId = 12;

  let [user, updateUser] = useState();
  let [userActivity, updateUserActivity] = useState({});
  let [userAverageSessions, updateUserAverageSessions] = useState({});
  let [userPerformance, updateUserPerformance] = useState({});

  let [isUserLoading, updateUserLoading] = useState(true);
  let [isUserActivityLoading, updateUserActivityLoading] = useState(true);
  let [
    isUserAverageSessionsLoading,
    updateUserAverageSessionsLoading,
  ] = useState(true);
  let [isUserPerformanceLoading, updateUserPerformanceLoading] = useState(true);

  useEffect(getData, [userId]);

  function getData() {
    userService.findOne(userId).then((user) => {
      updateUser(user);
      updateUserLoading(false);
    });
    userService.findOneActivity(userId).then((userActivity) => {
      updateUserActivity(userActivity);
      updateUserActivityLoading(false);
    });
    userService.findOneAverageSessions(userId).then((userAverageSessions) => {
      updateUserAverageSessions(userAverageSessions);
      updateUserAverageSessionsLoading(false);
    });
    userService.findOnePerformance(userId).then((userPerformance) => {
      updateUserPerformance(userPerformance);
      updateUserPerformanceLoading(false);
    });
  }

  return (
    <div className="dashboard">
      <aside className="dashboard__aside">
        <DashboardAside />
      </aside>
      {!isUserLoading ? (
        <section className="dashboard__body">
          <div className="dashboard__welcome">
            <DashboardWelcome userName={user.userInfos.firstName} />
          </div>
        </section>
      ) : (
        <div className="loading">
          <span>Chargement des données...</span>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
