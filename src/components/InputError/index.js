import React from 'react';

import './styles.scss';

const InputError = ({ error }) => {
  return (
    <div className="InputError">
      <p>{error}</p>
    </div>
  )
}

export default InputError;