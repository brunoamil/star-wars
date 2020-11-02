import React from 'react';

import './styles.scss';

const Swapi = () => {
  return (
    <div className="collum">
      <div className="swapi">
        <h2 className="swapi__title">Swapi</h2>
        <p className="swapi__paragragh">A API Star Wars, ou "swapi" (Swah-pee) utilizada neste projeto é a primeira fonte de dados quantificada e programaticamente acessível
         para todos os dados do universo canônico de <span>Star Wars</span>!</p>
        <p className="swapi__paragragh">Visite o site </p>
        <p className="swapi__link"><a href="https://swapi.dev/">https://swapi.dev/</a></p>
      </div>
    </div>
  )
}

export default Swapi;

