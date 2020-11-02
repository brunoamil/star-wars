import React from 'react';
import './styles.scss';

const DetailsSpecies = ({ specie }) => {

  return (
    <div className="collum  collum-6">
      <div className="detailsPlanets">
        <h2 className="detailsPlanets__title">{specie?.name}</h2>
        <p>Classificação: {specie?.classification}</p>
        <p>Designação: {specie?.designation}</p>
        <p>Altura média: {specie?.average_height}</p>
        <p>Cores de pele: {specie?.skin_colors}</p>
        <p>Cores de cabelo:: {specie?.hair_colors}</p>
        <p>Cor dos olhos: {specie?.eye_colors}</p>
        <p>Vida média: {specie?.average_lifespan}</p>
        <p>Língua: {specie?.language}</p>
      </div>
    </div >
  )
}
export default DetailsSpecies;