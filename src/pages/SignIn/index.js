import React from 'react';
import { Text, StatusBar, TouchableOpacity } from 'react-native';
import {
  Container,
  FormContainer,
  Button,
  MoneyIcon,
  FormText
} from './styles';
import Input from '../../components/Input';
import ActionButton from '../../components/ActionButton';

const SignIn = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00261C" />
      <Container>
        <MoneyIcon
          name="monetization-on"
          color="#ffffff"
          size={64}
        />
        <FormContainer>
          <Input
            placeholder="Nome de usuário"
            placeholderTextColor="#aabbbb"
          />
          <Input
            secureTextEntry={true}
            placeholder="Senha"
            placeholderTextColor="#aabbbb"
          />
          <ActionButton onPress={() => {}}>
            <Text>ENTRAR</Text>
          </ActionButton>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <FormText>Cadastre-se</FormText>
          </TouchableOpacity>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignIn;
