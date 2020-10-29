import React from 'react';
import './styles.scss';

const ButtonHome = () => {
  return (
    <div className="collum search">
      <input type="text" placeholder="Young Paduan, type the type" />
      <button>Search</button>
    </div>
  )
}

export default ButtonHome;