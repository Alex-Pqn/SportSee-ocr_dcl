import './IconSwimming.scss';

import PropTypes from 'prop-types';

/**
 * Icon Swimming
 * @param {string} color
 */
const IconSwimming = ({ color }) => {
  return (
    <svg className="swimming-icon" viewBox="0 0 32 32">
      <path
        d="M13.3334 10.6666L9.00002 15C9.41335 15.16 9.74669 15.36 10.0267 15.52C10.52 15.8266 10.8134 16 11.56 16C12.3067 16 12.6 15.8266 13.0934 15.52C13.7067 15.16 14.5334 14.6666 16.0134 14.6666C17.4934 14.6666 18.32 15.16 18.92 15.52C19.4134 15.8133 19.72 16 20.4534 16C21.1867 16 21.4934 15.8266 21.9867 15.52C22.1467 15.4266 22.3334 15.32 22.5334 15.2133L13.9734 6.66663C11.9067 4.59997 10 3.98663 6.66669 3.99997V7.3333C9.09335 7.31997 10.52 7.8533 12 9.3333L13.3334 10.6666ZM29.3334 22H29.3067H29.3334ZM7.13335 20.6666C7.86669 20.6666 8.17335 20.8533 8.66669 21.1466C9.26669 21.5066 10.0934 22 11.5734 22C13.0534 22 13.88 21.5066 14.48 21.1466C14.9734 20.84 15.2667 20.6666 16.0134 20.6666C16.7467 20.6666 17.0534 20.8533 17.5467 21.1466C18.1467 21.5066 18.9734 22 20.4534 22C21.9334 22 22.76 21.5066 23.36 21.1466C23.8534 20.84 24.1467 20.6666 24.8934 20.6666C25.6267 20.6666 25.9334 20.8533 26.4267 21.1466C27.0267 21.5066 27.84 21.9866 29.3067 22V19.3333C28.5734 19.3333 28.2667 19.1466 27.7734 18.8533C27.1734 18.4933 26.3467 18 24.8667 18C23.3867 18 22.56 18.4933 21.96 18.8533C21.4667 19.16 21.16 19.3333 20.4267 19.3333C19.6934 19.3333 19.3867 19.1466 18.8934 18.8533C18.2934 18.4933 17.4667 18 15.9867 18C14.5067 18 13.68 18.4933 13.08 18.8533C12.5867 19.16 12.2934 19.3333 11.5467 19.3333C10.8134 19.3333 10.5067 19.1466 10.0134 18.8533C9.41335 18.4933 8.58669 18 7.10669 18C5.62669 18 4.80002 18.4933 4.20002 18.8533C3.70669 19.16 3.41335 19.3333 2.66669 19.3333V22C4.14669 22 4.97335 21.5066 5.60002 21.1466C6.09335 20.84 6.40002 20.6666 7.13335 20.6666ZM24.8934 24C23.4134 24 22.5867 24.4933 21.9867 24.8533C21.4934 25.16 21.1867 25.3333 20.4534 25.3333C19.72 25.3333 19.4134 25.1466 18.92 24.8533C18.32 24.4933 17.4934 24 16.0134 24C14.5334 24 13.7067 24.4933 13.0934 24.8533C12.6 25.16 12.3067 25.3333 11.56 25.3333C10.8134 25.3333 10.52 25.16 10.0267 24.8533C9.42669 24.4933 8.60002 24 7.12002 24C5.64002 24 4.81335 24.4933 4.20002 24.8533C3.70669 25.16 3.41335 25.3333 2.66669 25.3333V28C4.14669 28 4.97335 27.5066 5.58669 27.1466C6.08002 26.84 6.38669 26.6666 7.12002 26.6666C7.85335 26.6666 8.16002 26.84 8.65335 27.1466C9.25335 27.5066 10.08 28 11.56 28C13.04 28 13.8667 27.5066 14.48 27.1466C14.9734 26.84 15.2667 26.6666 16.0134 26.6666C16.7467 26.6666 17.0534 26.8533 17.5467 27.1466C18.1467 27.5066 18.9734 28 20.4534 28C21.9334 28 22.7467 27.5066 23.36 27.1466C23.8534 26.84 24.1467 26.6666 24.8934 26.6666C25.6267 26.6666 25.9334 26.8533 26.4267 27.1466C27.0267 27.5066 27.8534 28 29.3334 28V25.3333C28.5867 25.3333 28.2934 25.16 27.8 24.8533C27.2 24.4933 26.3734 24 24.8934 24Z"
        fill={color}
      />
      <path
        d="M22 10.6667C23.841 10.6667 25.3334 9.17428 25.3334 7.33333C25.3334 5.49238 23.841 4 22 4C20.1591 4 18.6667 5.49238 18.6667 7.33333C18.6667 9.17428 20.1591 10.6667 22 10.6667Z"
        fill={color}
      />
    </svg>
  );
};

IconSwimming.propTypes = {
  color: PropTypes.string.isRequired,
};

export default IconSwimming;
