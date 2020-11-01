import React, { useState } from 'react';

import './styles.scss';
import './../../styles/grid.scss';

import Container from './../../components/Container';
import Header from './../../components/Header';
import Apresentation from './../../components/Apresentation';
import InputSearch from './../../components/InputSearch';
import SearchCategory from '../../components/SearchCategory';
import ButtonSearch from '../../components/ButtonSearch';
import SearchApresentation from '../../components/SearchApresentation';
import LoadingSpinner from '../../components/LoadingSpinner';
//import { LoadingContext } from '../../context/LoadingSpinnerContext';
import Footer from '../../components/Footer';

import api from '../../services/api';

const Dashboard = () => {
  const [searchCategory, setsearchCategory] = useState('');
  //const { exibeLoading, escondeLoading } = useContext(LoadingContext);
  const [loading, setLoading] = useState(false);
  const [searchPath, setsearchPath] = useState('');
  const [inputError, setInputError] = useState('');
  const [categorys, setCategorys] = useState([]);

  async function handleSearchCategory(event) {
    event.preventDefault();

    if (!searchCategory) {
      setInputError('Ops,parece que meu jovem esqueceu de digitar uma categória :(');
      return;
    }

    try {
      //exibeLoading(true);
      setLoading(true);
      const searchParams = searchCategory.toLowerCase();
      const response = await api.get(`/${searchParams}`);
      const category = response.data.results;

      setCategorys(category);
      setsearchPath(searchCategory);
      setsearchCategory('');
      setInputError('');
      setLoading(false);

    } catch (err) {
      setLoading(false);
      setsearchCategory('');
      setInputError('Digite uma categoria válida jovem padoan, exemplo: People, Planets ou Species :D');
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
        <ButtonSearch
          onClick={handleSearchCategory} type="button">Buscar</ButtonSearch>)}

      <LoadingSpinner loading={loading} />

      <div className="InputError">
        {inputError && <p>{inputError}</p>}
      </div>

      {categorys.length === 0 ? "" : <h1 className="category">Encontramos no espaço sobre {searchPath}</h1>}

      {categorys.length === 0 ? <SearchCategory /> : categorys.map((dados, index) => (
        <SearchApresentation key={index} dados={dados} searchPath={searchPath} index={index} />
      ))}

      < Footer />
    </Container>
  );
}
export default Dashboard;

