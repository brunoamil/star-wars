import React from 'react';

import Container from './../../components/Container';
import Header from './../../components/Header';
import ButtonHome from './../../components/ButtonHome';
import Footer from './../../components/Footer';

const Home = () => {

  return (
    <Container>
      <Header />
      <ButtonHome to="/dashboard">Start</ButtonHome>
      <Footer />
    </Container>
  )
}

export default Home;

