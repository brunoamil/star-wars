import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import DetailsPeople from './DetailsPeople';
import ButtonBack from '../ButtonBack';
import InputError from '../InputError';

import './styles.scss';
import api from '../../services/api';


const ListPeople = () => {
  const [hasPeople, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/people").then(response => {
      const PeopleNew = response.data.results;
      setPeople(PeopleNew);
      setLoading(false);

    }).catch((error) => {
      setLoading(false);
      setInputError('Whoops! Houve um erro, tente novamente mais tarde meu jovem Padawan...', error.message || error);
    })

  }, [setPeople]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack to="/" />
        <h1>Detalhes das pessoas de <span>Star Wars:</span></h1>
      </div>

      {inputError && <InputError error={inputError} />}

      {hasPeople.map((people, index) => (
        <DetailsPeople people={people} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListPeople;