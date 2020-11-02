import React from 'react';
import './styles.scss';

const DetailsVehicles = ({ vehicle }) => {

  return (
    <div className="collum  collum-6">
      <div className="detailsVehicles">
        <h2 className="detailsVehicles__title">{vehicle?.name}</h2>
        <p>Modelo: {vehicle?.model}</p>
        <p>Fabricante: {vehicle?.manufacturer}</p>
        <p>Custo em Créditos: {vehicle?.cost_in_credits}</p>
        <p>Comprimento: {vehicle?.length}</p>
        <p>Veloc. Atmosférica Máx: {vehicle?.max_atmosphering_speed}</p>
        <p>Equipe técnica: {vehicle?.crew}</p>
        <p>Passageiros: {vehicle?.passengers}</p>
        <p>Capacidade de carga: {vehicle?.cargo_capacity}</p>
        <p>Consumíveis: {vehicle?.consumables}</p>
        <p>Classe de Veículo: {vehicle?.vehicle_class}</p>
      </div>
    </div >
  )
}
export default DetailsVehicles;