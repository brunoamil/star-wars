import React from 'react';

import './styles.scss';
import './../../styles/grid.scss';

import Container from './../../components/Container';
import Header from './../../components/Header';
import InputSearch from './../../components/InputSearch';
import BoxImg from './../../components/BoxImg';
import Apresentation from './../../components/Apresentation';


const Dashboard = () => {
  return (
    <Container>
      <Header />
      <div className="row">
        <Apresentation />
        <InputSearch />
        <BoxImg />
      </div>
    </Container >
  );
}
export default Dashboard;

