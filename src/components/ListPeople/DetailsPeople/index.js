import React from 'react';
import './styles.scss';

const DetailsPeople = ({ people }) => {

  return (
    <div className="collum  collum-6">
      <div className="detailsPeople">
        <h2 className="detailsPeople__title">{people?.name}</h2>
        <p>Gênero: {people?.gender}</p>
        <p>Altura: {people?.height}</p>
        <p>Peso: {people?.mass}</p>
        <p>Cor de cabelo: {people?.hair_color}</p>
        <p>Cor da pele:: {people?.skin_color}</p>
        <p>Cor dos olhos: {people?.eye_color}</p>
        <p>Ano de nascimento: {people?.birth_year}</p>
        <p>Cor da pele: {people?.skin_color}</p>
      </div>
    </div >
  )
}
export default DetailsPeople;