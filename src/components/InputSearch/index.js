import React, { useState } from 'react';
import api from '../../services/api';

import './styles.scss';

const ButtonHome = () => {
  const [searchCategory, setsearchCategory] = useState('');

  const [categorys, setCagetorys] = useState([]);

  async function handleSearchCategory(event) {
    event.preventDefault();

    const response = await api.get(`/${searchCategory}`);
    const category = response.data.results;
    setCagetorys([...categorys, category]);
  }

  return (
    <div className="collum search">
      <form onSubmit={handleSearchCategory}>
        <input onChange={(e) => { setsearchCategory(e.target.value) }} type="text" placeholder="Young Paduan, type the type" />
        <button type="submit">Search</button>
      </form>
      <div>
      </div>
    </div>
  )
}

export default ButtonHome;