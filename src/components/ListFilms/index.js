import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsFilm from './DetailsFilm';
import ButtonBack from './../ButtonBack';
import InputError from '../InputError';

const ListFilms = () => {
  const [hasFilm, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/films").then(response => {
      const FilmNew = response.data.results;
      setFilm(FilmNew);
      setLoading(false);

    }).catch((error) => {
      setLoading(false);
      setInputError('Whoops! Houve um erro, tente novamente mais tarde meu jovem Padawan...', error.message || error);
    })

  }, [setFilm]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack to="/" />
        <h1>Detalhes dos filmes de <span>Star Wars:</span></h1>
      </div>

      {inputError && <InputError error={inputError} />}

      {hasFilm.map((film, index) => (
        <DetailsFilm film={film} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListFilms;