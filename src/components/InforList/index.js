/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import './styles.scss';

const InforList = () => {
  const [details, setDetails] = useState([]);
  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`films/${params.id}`).then(response => {
      const detailsNew = response.data;
      console.log(response.data);
      setDetails([...details, detailsNew]);
    })
  }, [params.id]);

  return (
    <div className="info">
      <div className="info__list">
        {details.map((text, index) => (
          <div key={index}>
            <p>{text.title}</p>
            <p>{text.director}</p>
            <p>{text.producer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InforList;