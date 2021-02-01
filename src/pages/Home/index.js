import React from 'react';
import { StatusBar, Text } from 'react-native';
import Balance from '../../components/Balance';
import MainContainer from '../../components/MainContainer';

const Home = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#131B26" />
    <MainContainer>
      <Balance />
    </MainContainer>
    </>
  );
};

export default Home;
