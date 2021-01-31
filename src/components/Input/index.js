import React from 'react';
import { Container, MyInput } from './styles';

const Input = (props) => (
  <Container>
    <MyInput
      {...props}
      placeholderTextColor="#aabbbb"
    />
  </Container>
);

export default Input;
