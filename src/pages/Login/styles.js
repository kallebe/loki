import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background-color: #00261C;
  flex: 1;
  justify-content: center;
`;

export const MoneyIcon = styled(Icon)`
  align-self: center;
`;

export const FormContainer = styled.View`
  margin: 32px;
`;

export const Input = styled.TextInput`
  padding: 16px;
  margin-bottom: 8px;
  color: #fff;
`;

export const FormText = styled.Text`
  color: #fff;
  margin: 16px;
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px;
  align-items: center;
  border-radius: 8px;
  margin-top: 32px;
`;
