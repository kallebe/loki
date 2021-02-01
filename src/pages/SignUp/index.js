import React from 'react';
import { StatusBar } from 'react-native';
import ActionButton from '../../components/ActionButton';
import Input from '../../components/Input';
import MainContainer from '../../components/MainContainer';

import { Heading, ScrollView } from './styles';

const SignUp = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#131B26" />
      <MainContainer>
        <Heading>Criar Conta</Heading>
        <ScrollView
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flex: 1 }}
        >
          <Input
            name="name"
            autoCapitalize="words"
            textContentType="name"
            placeholder="Nome Completo"
          />
          <Input
            name="email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="E-mail"
          />
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
          <Input
            name="confirm_password"
            textContentType="password"
            secureTextEntry={true}
            placeholder="Confirmação de Senha"
          />
          <ActionButton>
            CADASTRAR
          </ActionButton>
        </ScrollView>
      </MainContainer>
    </>
  );
}

export default SignUp;
