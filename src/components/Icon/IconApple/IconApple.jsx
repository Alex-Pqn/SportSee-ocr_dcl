import './IconApple.scss';

import PropTypes from 'prop-types';

/**
 * Icon Apple
 * @param {string} color
 */
const IconApple = ({ color }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6575 15.1C16.225 16.0575 16.0187 16.485 15.4612 17.3313C14.685 18.5125 13.5912 19.985 12.235 19.9975C11.03 20.0088 10.72 19.2138 9.08499 19.2225C7.44999 19.2313 7.10749 20.0113 5.90249 20C4.54624 19.9875 3.50999 18.6588 2.73249 17.4763C0.562489 14.1713 0.334989 10.2938 1.67374 8.2325C2.62499 6.76625 4.12624 5.91 5.53874 5.91C6.97624 5.91 7.87874 6.6975 9.06749 6.6975C10.22 6.6975 10.9225 5.90875 12.585 5.90875C13.8412 5.90875 15.1725 6.5925 16.12 7.77375C13.0137 9.4775 13.5187 13.9138 16.6575 15.1Z"
        fill={color}
      />
      <path
        d="M1.84285 15.1C2.27535 16.0575 2.4816 16.485 3.0391 17.3313C3.81535 18.5125 4.9091 19.985 6.26535 19.9975C7.47035 20.0088 7.78035 19.2138 9.41535 19.2225C11.0503 19.2313 11.3928 20.0113 12.5978 20C13.9541 19.9875 14.9903 18.6588 15.7678 17.4763C17.9378 14.1713 18.1653 10.2938 16.8266 8.2325C15.8753 6.76625 14.3741 5.91 12.9616 5.91C11.5241 5.91 10.6216 6.6975 9.43285 6.6975C8.28035 6.6975 7.57785 5.90875 5.91535 5.90875C4.6591 5.90875 3.32785 6.5925 2.38035 7.77375C5.4866 9.4775 4.9816 13.9138 1.84285 15.1Z"
        fill={color}
      />
      <path
        d="M12.005 3.37375C12.6875 2.49875 13.205 1.2625 13.0162 0C11.9025 0.07625 10.6 0.785 9.83873 1.70875C9.14873 2.5475 8.57873 3.79125 8.79998 5C10.0162 5.0375 11.2737 4.31125 12.005 3.37375Z"
        fill={color}
      />
    </svg>
  );
};

IconApple.propTypes = {
  color: PropTypes.string.isRequired,
};

export default IconApple;
