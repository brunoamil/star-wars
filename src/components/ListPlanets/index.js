import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsPlanets from './DetailsPlanets';
import { Link } from 'react-router-dom';


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
      <LoadingSpinner loading={loading} />
      <Link className="buttonBack" to="/dashboard">VOLTAR</Link>

      <h1>Detalhes dos planetas de Star Wars:</h1>
      {hasPlanet.map((planet, index) => (
        <DetailsPlanets planet={planet} key={index} />
      ))}
    </>
  )
}

export default ListPlanets;