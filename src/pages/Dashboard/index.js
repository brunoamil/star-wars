import React, { useState } from 'react';

import './styles.scss';
import './../../styles/grid.scss';

import Container from './../../components/Container';
import Header from './../../components/Header';
import Apresentation from './../../components/Apresentation';
import InputSearch from './../../components/InputSearch';
import BoxImg from './../../components/BoxImg';
import Footer from '../../components/Footer';
import api from '../../services/api';
import BoxCategory from '../../components/BoxCategory';
import Loading from '../../components/Loading';

const Dashboard = () => {
  //const { name, setName, title, setTitle } = useCategory();
  const [searchCategory, setsearchCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchPath, setsearchPath] = useState('');
  const [inputError, setInputError] = useState('');
  const [categorys, setCategorys] = useState([]);

  async function handleSearchCategory(event) {
    event.preventDefault();

    if (!searchCategory) {
      setInputError('Digite uma das categorias válidas.');
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
      setInputError('Desculpa Paduan, parece que estamos enfrentando uns probleminhas :(');
    }
  }

  return (
    <Container>
      <Header />
      <div className="row">
        <Apresentation />
        <InputSearch
          value={searchCategory}
          onChange={(e) => { setsearchCategory(e.target.value) }}
          placeholder="Testando placeholder"
        />
        <div>
          {inputError && <p>{inputError}</p>}
        </div>
        {!loading && (
          <div>
            <button onClick={handleSearchCategory} type="button">Search</button>
          </div>)}
        <Loading loading={loading} />

        {categorys.length === 0 ? <BoxImg /> : categorys.map((dados, index) => (
          <BoxCategory key={index} dados={dados} searchPath={searchPath} index={index} />
        ))}

        <Footer />
      </div>
    </Container>
  );
}
export default Dashboard;

