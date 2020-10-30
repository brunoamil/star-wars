import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.scss';

const InputSearch = () => {
  const [searchCategory, setsearchCategory] = useState('');
  const [inputError, setInputError] = useState('');
  const [categorys, setCategorys] = useState([]);

  async function handleSearchCategory(event) {
    event.preventDefault();

    if (!searchCategory) {
      setInputError('Digite uma das categorias válidas.');
      return;
    }
    try {
      const searchParams = searchCategory.toLowerCase();
      const response = await api.get(`/${searchParams}`);
      const category = response.data;
      console.log(category)
      setCategorys([...categorys, category]);
      setsearchCategory('');
      setInputError('');

    } catch (err) {
      setInputError('Desculpa Paduan, parece que estamos enfrentando uns probleminhas :(');
    }
  }
  return (
    <div className="collum search">
      <form onSubmit={handleSearchCategory}>
        <input
          value={searchCategory}
          onChange={(e) => { setsearchCategory(e.target.value) }}
          type="text"
          placeholder="Young Paduan, type the type"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {inputError && <p>{inputError}</p>}
      </div>
      {categorys.map((dado, index) => (
        <div key={index}>
          {dado.results.map((cat, index) => (
            <ul key={index}>
              <li>{cat.name ? cat.name : cat.title}</li>
              <li><Link to={`listcategory/1`}>ok</Link></li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  )
}

export default InputSearch;