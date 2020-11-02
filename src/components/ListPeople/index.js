import React, { useCallback, useEffect, useState } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';

import DetailsPeople from './DetailsPeople';

import './styles.scss';
import api from '../../services/api';
import ButtonBack from '../ButtonBack';

const ListPeople = () => {
  const [hasPeople, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);

    await api.get("/people").then(response => {
      const PeopleNew = response.data.results;
      setPeople(PeopleNew);
      setLoading(false);

    }).catch((error) => {
      console.log('Whoops! Houve um erro.', error.message || error)
    })

  }, [setPeople]);

  useEffect(() => {
    load();

  }, [load]);

  return (
    <>
      <div className="description">
        <ButtonBack />
        <h1>Detalhes das pessoas de <span>Star Wars:</span></h1>
      </div>

      {hasPeople.map((people, index) => (
        <DetailsPeople people={people} key={index} />
      ))}

      <LoadingSpinner loading={loading} />
    </>
  )
}

export default ListPeople;