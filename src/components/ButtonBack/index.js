import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';

const ButtonBack = () => {
  return (
    <Link className="buttonBack" to="/dashboard"><FiArrowLeft /></Link>
  )
}

export default ButtonBack;