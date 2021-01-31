import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import {
  Container,
  FormContainer,
  MoneyIcon,
  FormText
} from './styles';
import Input from '../../components/Input';
import ActionButton from '../../components/ActionButton';

const SignIn = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#131B26" />
      <Container>
        <MoneyIcon
          name="monetization-on"
          color="#ccc"
          size={64}
        />
        <FormContainer>
          <Input
            name="username"
            autoCapitalize="none"
            textContentType="username"
            placeholder="Nome de usuário"
          />
          <Input
            name="password"
            textContentType="password"
            secureTextEntry={true}
            placeholder="Senha"
          />
          <ActionButton onPress={() => {}}>
            ENTRAR
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
