import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsStarships from './DetailsStarships';
import ButtonBack from '../ButtonBack';
import InputError from '../InputError';

const ListStarships = () => {
  const [hasStarship, setStarship] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/starships").then(response => {
      const StarshipNew = response.data.results;
      setStarship(StarshipNew);
      setLoading(false);

    }).catch((error) => {
      setLoading(false);
      setInputError('Whoops! Houve um erro, tente novamente mais tarde meu jovem Padawan...', error.message || error);
    })

  }, [setStarship]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack to="/dashboard" />
        <h1>Detalhes dos filmes de <span>Star Wars:</span></h1>
      </div>

      {inputError && <InputError error={inputError} />}

      {hasStarship.map((starship, index) => (
        <DetailsStarships starship={starship} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListStarships;