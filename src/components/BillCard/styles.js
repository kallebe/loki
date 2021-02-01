import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #0E141C;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 8px;
  flex-direction: row;
`;

export const CardLeft = styled.View`
  flex: 1;
`;

export const CardTitle = styled.Text`
  color: #ccc;
  font-size: 16px;
  font-weight: bold;
`;

export const CardPrice = styled.Text`
  color: #ccc;
  font-size: 14px;
  font-weight: bold;
`;

export const CardDue = styled.Text`
  color: #75E312;
  font-size: 12px;
`;

export const CardDate = styled.Text`
  color: #ccc;
  font-size: 12px;
`;
