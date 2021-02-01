import React from 'react';
import { View } from 'react-native';
import {
  CardDate,
  CardLeft,
  CardTitle,
  CardPrice,
  CardDue,
  Container
} from './styles';

const BillCard = () => (
  <Container>
    <CardLeft>
      <CardTitle>Calça para jovem</CardTitle>
      <CardDate>31/01/21</CardDate>
    </CardLeft>
    <View>
      <CardPrice>R$ 301,00</CardPrice>
      <CardDue>Tá pago</CardDue>
    </View>
  </Container>
);

export default BillCard;
