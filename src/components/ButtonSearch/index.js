import React from 'react';

import ButtonBack from '../../components/ButtonBack';
import './styles.scss';

const ButtonSearch = ({ type, children, onClick }) => {
  return (
    <div className="collum buttonSearch">
      <button onClick={onClick} type={type}>{children}</button>
      <div className="butttonSearch__back">
        <ButtonBack to="/" />
      </div>
    </div>
  )
}

export default ButtonSearch;