/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import './styles.scss';

const InforList = () => {
  const [details, setDetails] = useState([]);
  const { params } = useRouteMatch();

  const category = params.category;
  let id = params.id;




  useEffect(() => {


    api.get(`${category}/${id}`).then(response => {
      const detailsNew = response.data;
      setDetails([...details, detailsNew]);
    })
  }, [params.id]);
  return (
    <div className="info">
      <div className="info__list">
        {details.map((text, index) => (
          <div key={index}>
            <p>{text.name ? text.name : text.title}</p>
            <p>{text.director}</p>
            <p>{text.producer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InforList;