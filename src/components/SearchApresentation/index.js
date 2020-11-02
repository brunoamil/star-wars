import React from 'react';
import './styles.scss';

const SearchApresentation = ({ dados, index }) => {

  return (
    <div className="collum collum-4" key={index}>
      <div className="details__content">
        <h2 className="details__title">{dados.name ? dados.name : dados.title}</h2>
      </div>
    </div>
  )
}
export default SearchApresentation;