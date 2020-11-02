import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsStarships from './DetailsStarships';
import { Link } from 'react-router-dom';

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
      <LoadingSpinner loading={loading} />
      <Link className="buttonBack" to="/dashboard">VOLTAR</Link>

      <h1>Detalhes dos filmes de Star Wars:</h1>

      {hasStarship.map((starship, index) => (
        <DetailsStarships starship={starship} key={index} />
      ))}
    </>
  )
}

export default ListStarships;