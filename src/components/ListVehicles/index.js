import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';

import api from '../../services/api';

import DetailsVehicles from './DetailsVehicles';
import { Link } from 'react-router-dom';

const ListVehicles = () => {
  const [hasVehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/vehicles").then(response => {
      const VehicleNew = response.data.results;
      setVehicle(VehicleNew);
      setLoading(false);

    }).catch((error) => {
      console.log('Whoops! Houve um erro.', error.message || error)
    })

  }, [setVehicle]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <LoadingSpinner loading={loading} />
      <Link className="buttonBack" to="/dashboard">VOLTAR</Link>

      <h1>Detalhes dos Veículos de Star Wars:</h1>
      {hasVehicle.map((vehicle, index) => (
        <DetailsVehicles vehicle={vehicle} key={index} />
      ))}
    </>
  )
}

export default ListVehicles;