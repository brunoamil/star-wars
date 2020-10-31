import React, { useState } from 'react';

import './styles.scss';
import './../../styles/grid.scss';

import Container from './../../components/Container';
import Header from './../../components/Header';
import Apresentation from './../../components/Apresentation';
import InputSearch from './../../components/InputSearch';
import SearchCategory from '../../components/SearchCategory';
import BoxCategory from '../../components/BoxCategory';
import LoadingSpinner from '../../components/LoadingSpinner';
import Footer from '../../components/Footer';

import api from '../../services/api';


const Dashboard = () => {
  const [searchCategory, setsearchCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchPath, setsearchPath] = useState('');
  const [inputError, setInputError] = useState('');
  const [categorys, setCategorys] = useState([]);

  async function handleSearchCategory(event) {
    event.preventDefault();

    if (!searchCategory) {
      setLoading(false);
      setInputError('Ops,parece que meu jovem esqueceu de digitar uma categória correta :(');
      return;
    }

    try {

      setLoading(true);

      setTimeout(async () => {

        const searchParams = searchCategory.toLowerCase();
        const response = await api.get(`/${searchParams}`);
        const category = response.data.results;

        setCategorys(category);
        setsearchPath(searchCategory);
        setsearchCategory('');
        setInputError('');
        setLoading(false);

      }, 2000)
    } catch (err) {
      setInputError('Milhões de sabre de luz de desculpa meu jovem, parece que estamos enfrentando uns probleminhas:(');
      setLoading(false);

    }
  }

  return (
    <Container>
      <Header />
      <Apresentation />

      <InputSearch
        value={searchCategory}
        onChange={(e) => { setsearchCategory(e.target.value) }}
        placeholder="Informe uma categoria"
      />

      {!loading && (
        <div className="collum buttonSearch">
          <button onClick={handleSearchCategory} type="button">Buscar</button>
        </div>)}
      <LoadingSpinner loading={loading} />

      <div className="InputError">
        {inputError && <p>{inputError}</p>}
      </div>



      {categorys.length === 0 ? <SearchCategory /> : categorys.map((dados, index) => (
        <BoxCategory key={index} dados={dados} searchPath={searchPath} index={index} />
      ))}

      <Footer />
    </Container>
  );
}
export default Dashboard;

