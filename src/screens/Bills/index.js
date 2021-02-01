import React from 'react';
import BillCard from '../../components/BillCard';
import { Container } from './styles';

const Bills = () => {
  return (
    <MainContainer>
      <Container>
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
      </Container>
    </MainContainer>
  );
}

export default Bills;