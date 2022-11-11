import './DefaultNavbar.scss';

import { Link } from 'react-router-dom';

const DefaultNavbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">Profil</Link>
        </li>
        <li>
          <Link to="/">Réglage</Link>
        </li>
        <li>
          <Link to="/">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DefaultNavbar;
