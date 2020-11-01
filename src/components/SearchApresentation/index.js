import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare } from 'react-icons/fi'
import './styles.scss';

const SearchApresentation = ({ dados, searchPath, index }) => {
  const idPath = dados.url.split("/")[5];
  const searchPathLowerCase = searchPath.toLowerCase();

  return (
    <div className="collum collum-4" key={index}>
      <div className="details__content">
        <h2 className="details__title">{dados.name ? dados.name : dados.title}</h2>
        <Link className="details__link" to={`listcategory/${searchPathLowerCase}/${idPath}`}><FiPlusSquare /> detalhes</Link>
      </div>
    </div>
  )
}
export default SearchApresentation;