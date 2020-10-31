import React from 'react';
import Spinner from 'react-spinkit';

import './styles.scss';

const LoadingSpinner = ({ loading }) => {
  return loading ? (
    <div className="spinner">
      <div className="spinner__wrapper">
        <Spinner
          name="line-scale-pulse-out-rapid"
          fadeIn="none"
          color="#05d1ff"
          className="spinner__width"
        />
      </div>
    </div>
  ) : null;
}

export default LoadingSpinner;