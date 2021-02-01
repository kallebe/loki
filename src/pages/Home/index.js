import React from 'react';
import { StatusBar, Text } from 'react-native';
import Balance from '../../components/Balance';
import MainContainer from '../../components/MainContainer';
import HomeTabs from './homeTabs';

const Home = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#131B26" />
    <MainContainer>
      <Balance />
      <HomeTabs />
    </MainContainer>
    </>
  );
};

export default Home;
