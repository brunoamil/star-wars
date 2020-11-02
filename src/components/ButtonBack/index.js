import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';

const ButtonBack = ({ to }) => {
  return (
    <Link className="buttonBack" to={to}><FiArrowLeft /></Link>
  )
}

export default ButtonBack;