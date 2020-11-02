import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsFilm from './DetailsSpecies';
import ButtonBack from '../ButtonBack';
import InputError from '../InputError';

const ListSpecies = () => {
  const [hasSpecie, setSpecie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/species").then(response => {
      const SpecieNew = response.data.results;
      setSpecie(SpecieNew);
      setLoading(false);

    }).catch((error) => {
      setLoading(false);
      setInputError('Whoops! Houve um erro, tente novamente mais tarde meu jovem Padawan...', error.message || error);
    })

  }, [setSpecie]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack to="/" />
        <h1>Detalhes das espécies de <span>Star Wars:</span></h1>
      </div>

      {inputError && <InputError error={inputError} />}

      {hasSpecie.map((specie, index) => (
        <DetailsFilm specie={specie} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListSpecies;