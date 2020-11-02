import React from 'react';
import { Link } from 'react-router-dom';

import { ListPhotos } from './ListPhotos';

import './styles.scss';

const SearchCategory = () => {
  return (
    <>
      {ListPhotos.map(photo => {
        return (
          <div className="collum collum-2" key={photo.id}>
            <Link to={photo.title}>
              <div className="list">
                <div className="list__legend">
                  <p>{photo.title}</p>
                </div>
                <div className="list__box">
                  <img className="list__img" src={photo.img} alt={photo.alt} />
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  );
};

export default SearchCategory;