import './Header.scss';

import DefaultNavbar from './../Navbar/Navbar';
import IconLogo from './../../Icon/Logo/Logo';

const DefaultHeader = () => {
  return (
    <header className="header">
      <div className="header__logo header__container">
        <IconLogo />
      </div>
      <div className="header__navbar header__container">
        <DefaultNavbar />
      </div>
    </header>
  );
};

export default DefaultHeader;
