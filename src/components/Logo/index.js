import React from 'react';

import LogoImg from '../../assets/img/logo.svg';

const Logo = ({ className }) => {
  return (
    <img className={className} src={LogoImg} alt="Uma logo amarela com letras maiusculas da saga star wars" />
  )
}

export default Logo;