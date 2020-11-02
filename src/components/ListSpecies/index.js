import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsFilm from './DetailsSpecies';
import ButtonBack from '../ButtonBack';

const ListSpecies = () => {
  const [hasSpecie, setSpecie] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/species").then(response => {
      const SpecieNew = response.data.results;
      setSpecie(SpecieNew);
      setLoading(false);

    }).catch((error) => {
      console.log('Whoops! Houve um erro.', error.message || error)
    })

  }, [setSpecie]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack />
        <h1>Detalhes das espécies de <span>Star Wars:</span></h1>
      </div>

      {hasSpecie.map((specie, index) => (
        <DetailsFilm specie={specie} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListSpecies;