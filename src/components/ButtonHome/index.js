import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const ButtonHome = ({ to, children }) => {
  return (
    <div className="button">
      <div className="button__center">
        <Link className="button__link" to={to}>{children}</Link>
      </div>
    </div>
  )
}

export default ButtonHome;