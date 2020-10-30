import React from 'react';

import './styles.scss';
import './../../styles/grid.scss';

import Container from './../../components/Container';
import Header from './../../components/Header';
import Apresentation from './../../components/Apresentation';
import InputSearch from './../../components/InputSearch';
import BoxImg from './../../components/BoxImg';
import BoxDetails from './../../components/BoxDetails';
import Footer from '../../components/Footer';

const Dashboard = () => {

  return (
    <Container>
      <Header />
      <div className="row">
        <Apresentation />
        <InputSearch />
        <BoxDetails />
        <BoxImg />
        <Footer />
      </div>
    </Container>
  );
}
export default Dashboard;

