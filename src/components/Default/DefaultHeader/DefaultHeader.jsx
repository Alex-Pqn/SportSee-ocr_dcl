import './DefaultHeader.scss';

import DefaultNavbar from '../DefaultNavbar/DefaultNavbar';
import IconLogo from '../../Icon/IconLogo/IconLogo';

/**
 * Default Header
 */
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
