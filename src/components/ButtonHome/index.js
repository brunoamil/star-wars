import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const ButtonHome = () => {
  return (
    <div className="button">
      <div className="button__center button__center--span">
        <Link className="button__link" to="/dashboard">Start</Link>
      </div>
    </div>
  )
}

export default ButtonHome;