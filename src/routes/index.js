import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';

const Stack = createStackNavigator();
const isSignedIn = true;               // TODO: connect with api

const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    {isSignedIn ? (
      <Stack.Screen name="Home" component={Home} />
    ) : (
      <>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </>
    )}
  </Stack.Navigator>
);

export default StackRoutes;
