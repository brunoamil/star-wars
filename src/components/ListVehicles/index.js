import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';

import api from '../../services/api';

import DetailsVehicles from './DetailsVehicles';
import ButtonBack from '../ButtonBack';

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
      <div className="description">
        <ButtonBack />
        <h1>Detalhes das espécies de <span>Star Wars:</span></h1>
      </div>

      {hasVehicle.map((vehicle, index) => (
        <DetailsVehicles vehicle={vehicle} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListVehicles;