import './Home.scss';

import DefaultActivitiesAside from './../../components/Default/ActivitiesAside/ActivitiesAside';

function Home() {
  return (
    <div className="home">
      <aside className="home__aside">
        <DefaultActivitiesAside />
      </aside>
    </div>
  );
}

export default Home;
