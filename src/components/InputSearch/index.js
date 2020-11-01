import React from 'react';
import './styles.scss';

const InputSearch = ({ placeholder, onChange, value }) => {
  return (
    <form className="collum search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </form>
  )
}

export default InputSearch;