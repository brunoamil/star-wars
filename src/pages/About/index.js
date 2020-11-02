import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const About = () => {
  return (
    <div className="collum">
      <div className="about">
        <h2 className="about__title">Site desenvolvido por <Link to="https://www.linkedin.com/in/bruno-amil/">Bruno Lima</Link></h2>
        <p className="about__paragragh">O objetivo do site é apenas apresentar algumas informações sobre personagens, espécies, filmes e outras categorias do mundo de <span>Star Wars</span>.</p>
        <p className="about__paragragh">Aproveite e que <span>a força esteja com você!</span></p>
      </div>
    </div>
  )
}

export default About;

