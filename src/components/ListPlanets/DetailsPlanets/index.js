import React from 'react';
import './styles.scss';

const DetailsPlanets = ({ planet }) => {

  return (
    <div className="collum  collum-6">
      <div className="detailsPlanets">
        <h2 className="detailsPlanets__title">{planet?.name}</h2>
        <p>Período de Rotação: {planet?.rotation_period}</p>
        <p>Período orbital: {planet?.orbital_period}</p>
        <p>Diâmetro: {planet?.diameter}</p>
        <p>Clima: {planet?.climate}</p>
        <p>Gravidade:: {planet?.gravity}</p>
        <p>Terreno: {planet?.terrain}</p>
        <p>Água da superfície: {planet?.surface_water}</p>
        <p>População: {planet?.population}</p>
      </div>
    </div >
  )
}
export default DetailsPlanets;