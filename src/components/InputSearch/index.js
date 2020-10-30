import React from 'react';
import './styles.scss';

const InputSearch = ({ placeholder, onChange, value }) => {
  return (
    <div className="collum search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default InputSearch;