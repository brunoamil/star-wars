import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsStarships from './DetailsStarships';
import ButtonBack from '../ButtonBack';

const ListStarships = () => {
  const [hasStarship, setStarship] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/starships").then(response => {
      const StarshipNew = response.data.results;
      setStarship(StarshipNew);
      setLoading(false);

    }).catch((error) => {
      console.log('Whoops! Houve um erro.', error.message || error)
    })

  }, [setStarship]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack />
        <h1>Detalhes dos filmes de <span>Star Wars:</span></h1>
      </div>

      {hasStarship.map((starship, index) => (
        <DetailsStarships starship={starship} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListStarships;