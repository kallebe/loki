import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Bills from '../../screens/Bills';
import Incomes from '../../screens/Incomes';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    barStyle={{
      backgroundColor: '#E27813',
      overflow: 'hidden',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    }}
    activeColor="#fff"
    inactiveColor="#131B26"
    shifting={true}
  >
    <Tab.Screen
      name="Contas"
      component={Bills}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="attach-money" size={24} color={color} />
        )
      }}
    />
    <Tab.Screen
      name="Receita"
      component={Incomes}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="point-of-sale" size={24} color={color} />
        )
      }}
    />
    <Tab.Screen
      name="Perfil"
      component={Incomes}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="account-circle" size={24} color={color} />
        )
      }}
    />
  </Tab.Navigator>
);

export default HomeTabs;
