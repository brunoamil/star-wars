import React from 'react';

import './styles.scss';

const DetailsFilm = ({ film }) => {
  console.log(film);

  return (
    <div className="collum  collum-6">
      <div className="detailsFilme">
        <h2 className="detailsFilme__title">{film?.title}</h2>
        <p>Diretor: {film?.director}</p>
        <p>Episódio: {film?.episode_id}</p>
        <p>Produtor: {film?.producer}</p>
        <p>Data Lançamento: {film?.release_date}</p>
      </div>
    </div >
  )
}
export default DetailsFilm;