import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';
import api from '../../services/api';

import DetailsFilm from './DetailsFilm';
import { Link } from 'react-router-dom';

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
      <LoadingSpinner loading={loading} />
      <Link className="buttonBack" to="/dashboard">VOLTAR</Link>
      <h1>Detalhes dos filmes de Star Wars:</h1>
      {hasFilm.map((film, index) => (
        <DetailsFilm film={film} key={index} />
      ))}
    </>
  )
}

export default ListFilms;