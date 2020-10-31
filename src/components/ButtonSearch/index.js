import React from 'react';

import './styles.scss';

const ButtonSearch = ({ type, children, onClick }) => {
  return (
    <div className="collum buttonSearch">
      <button onClick={onClick} type={type}>{children}</button>
    </div>
  )
}

export default ButtonSearch;