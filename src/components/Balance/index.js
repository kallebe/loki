import React from 'react';

import { BalanceContainer, BalanceText, BalanceValue } from './styles';

const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceText>Olá, Jurandismar, você tem</BalanceText>
      <BalanceValue>R$ 1.127,80</BalanceValue>
    </BalanceContainer>
  );
}

export default Balance;
