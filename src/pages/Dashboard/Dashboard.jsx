import './Dashboard.scss';

import { useEffect, useState } from 'react';

import DashboardAside from '../../components/Dashboard/Aside/Aside';
  return (
    <div className="dashboard">
      <aside className="dashboard__aside">
        <DashboardAside />
      </aside>
    </div>
  );
}

export default Dashboard;
