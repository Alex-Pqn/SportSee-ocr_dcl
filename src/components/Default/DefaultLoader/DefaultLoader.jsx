import './DefaultLoader.scss';

import IconLoader from '../../Icon/IconLoader/IconLoader';

const DefaultLoader = ({ message }) => {
  return (
    <div className="loader">
      <div className="loader__spinner">
        <IconLoader />
      </div>
      <span className="loader__message">{message}</span>
    </div>
  );
};

export default DefaultLoader;
