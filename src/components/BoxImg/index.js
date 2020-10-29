import React from 'react';

import './styles.scss';

import { ListPhotos } from './ListPhotos';

const BoxImg = () => {
  console.log(ListPhotos[0].img);

  return (
    <>
      {ListPhotos.map(photo => {
        return (
          <div className="collum collum-3" key={photo.id} >
            <div className="list" >
              <div className="list__img">
                <img src={photo.img} alt={photo.alt} />
              </div>
              <div className="list__legend">
                <p>{photo.title}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default BoxImg;