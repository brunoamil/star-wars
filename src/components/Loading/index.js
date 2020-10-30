import React from 'react';
import Spinner from 'react-spinkit';

import './styles.scss';

const Loading = ({ loading }) => {
  return loading ? (
    <div className="over-lay-content">
      <div className="wrapper">
        <Spinner
          name="line-scale-pulse-out-rapid"
          fadeIn="none"
          color="#05d1ff"
          className="loadingPersonalization"
        />
      </div>
    </div>
  ) : null;
}

export default Loading;