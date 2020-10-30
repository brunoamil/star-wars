import React from 'react';

import './styles.scss';

const ButtonBack = (props) => {
  return (
    <div>
      <button type="button">{props.cabecalho}</button>
    </div>
  );
};

export default ButtonBack;