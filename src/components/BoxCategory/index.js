import React from 'react';
import { Link } from 'react-router-dom';

import { Photos } from './Photos';

const BoxCategory = ({ dados, searchPath, index }) => {
  const idPath = dados.url.split("/")[5];
  const Images = Photos[idPath - 1];

  return (
    <div className="box-teste">
      <ul key={index}>
        <li>{dados.name ? dados.name : dados.title}</li>
        <li><Link to={`listcategory/${searchPath}/${idPath}`}>Acessars</Link></li>
      </ul>
      <div>
        <img src={Images.category} alt={Images.alt}></img>
      </div>
    </div >
  )
}
export default BoxCategory;