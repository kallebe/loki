import React from 'react';
import { Text, StatusBar, TouchableOpacity } from 'react-native';
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
      <StatusBar barStyle="light-content" backgroundColor="#00261C" />
      <Container>
        <MoneyIcon
          name="monetization-on"
          color="#ffffff"
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
