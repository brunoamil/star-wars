import React from 'react';

import './styles.scss';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  )
}

export default Container;