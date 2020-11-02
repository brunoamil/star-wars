import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsPlanets from './DetailsPlanets';
import ButtonBack from '../ButtonBack';


const ListPlanets = () => {
  const [hasPlanet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/planets").then(response => {
      const PlanetNew = response.data.results;
      setPlanet(PlanetNew);
      setLoading(false);

    }).catch((error) => {
      console.log('Whoops! Houve um erro.', error.message || error)
    })

  }, [setPlanet]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack />
        <h1>Detalhes dos planetas de <span>Star Wars:</span></h1>
      </div>

      {hasPlanet.map((planet, index) => (
        <DetailsPlanets planet={planet} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListPlanets;