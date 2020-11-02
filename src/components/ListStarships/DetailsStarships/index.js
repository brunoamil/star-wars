import React from 'react';

import './styles.scss';

const DetailsStarships = ({ starship }) => {

  return (
    <div className="collum  collum-6">
      <div className="detailsStarships">
        <h2 className="detailsStarships__title">{starship?.name}</h2>
        <p>Modelo: {starship?.model}</p>
        <p>Fabricante: {starship?.manufacturer}</p>
        <p>Custo em créditos: {starship?.cost_in_credits}</p>
        <p>Comprimento: {starship?.length}</p>
        <p>Velocidade Atmosférica Máx: {starship?.max_atmosphering_speed}</p>
        <p>Equipe Técnica: {starship?.crew}</p>
        <p>Passageiros: {starship?.passengers}</p>
        <p>Capacidade de carga: {starship?.cargo_capacity}</p>
        <p>Consumíveis: {starship?.consumables}</p>
        <p>Avaliação Hiperdrive: {starship?.hyperdrive_rating}</p>
        <p>MGLT: {starship?.MGLT}</p>
        <p>Aula de naves: {starship?.starship_class}</p>
      </div>
    </div >
  )
}
export default DetailsStarships;