import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsFilm from './DetailsFilm';
import ButtonBack from './../ButtonBack';

const ListFilms = () => {
  const [hasFilm, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/films").then(response => {
      const FilmNew = response.data.results;
      setFilm(FilmNew);
      setLoading(false);

    }).catch((error) => {
      console.log('Whoops! Houve um erro.', error.message || error)
    })

  }, [setFilm]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack />
        <h1>Detalhes dos filmes de Star Wars:</h1>
      </div>

      {hasFilm.map((film, index) => (
        <DetailsFilm film={film} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListFilms;