import React from 'react';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

const Template = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Template;