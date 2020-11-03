import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsPlanets from './DetailsPlanets';
import ButtonBack from '../ButtonBack';
import InputError from '../InputError';

const ListPlanets = () => {
  const [hasPlanet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/planets").then(response => {
      const PlanetNew = response.data.results;
      setPlanet(PlanetNew);
      setLoading(false);

    }).catch((error) => {
      setLoading(false);
      setInputError('Whoops! Houve um erro, tente novamente mais tarde meu jovem Padawan...', error.message || error);
    })

  }, [setPlanet]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack to="/dashboard" />
        <h1>Detalhes dos planetas de <span>Star Wars:</span></h1>
      </div>

      {inputError && <InputError error={inputError} />}

      {hasPlanet.map((planet, index) => (
        <DetailsPlanets planet={planet} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListPlanets;