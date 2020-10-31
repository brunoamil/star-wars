import React from 'react';
import { Link } from 'react-router-dom';

//import { PhotosFilms, PhotosPeople, PhotosPlanets, PhotosSpecies, PhotosStarships, PhotosVehicles } from './Photos';
//import imgLogo from './../../assets/img/logo.svg'

const BoxCategory = ({ dados, searchPath, index }) => {
  const idPath = dados.url.split("/")[5];
  //const PhotoFilm = PhotosFilms[idPath - 1];
  //console.log(PhotosPeople[0].img);
  return (
    <div className="box-teste">
      <ul key={index}>
        <li>{dados.name ? dados.name : dados.title}</li>
        <li><Link to={`listcategory/${searchPath}/${idPath}`}>Acessars</Link></li>
      </ul>
      {/* {searchPath === 'films' && <p key={searchPath}>{PhotosFilms.map(foto => <img src={foto.img} alt={foto.alt} />)}</p>} */}
      {/* {searchPath === 'people' && <p key={searchPath}>{PhotosPeople.map(foto => <img src={foto.img} alt={foto.alt} />)}</p>}
      {searchPath === 'planets' && <p key={searchPath}>{PhotosPlanets.map(foto => <img src={foto.img} alt={foto.alt} />)}</p>}
      {searchPath === 'species' && <p key={searchPath}>{PhotosSpecies.map(foto => <img src={foto.img} alt={foto.alt} />)}</p>}
      {searchPath === 'starships' && <p key={searchPath}>{PhotosStarships.map(foto => <img src={foto.img} alt={foto.alt} />)}</p>}
      {searchPath === 'vehicles' && <p key={searchPath}>{PhotosVehicles.map(foto => <img src={foto.img} alt={foto.alt} />)}</p>} */}

    </div>
  )
}
export default BoxCategory;