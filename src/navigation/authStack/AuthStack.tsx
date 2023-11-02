import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../../screens/auth/signIn/SignIn';
import SignOn from '../../screens/auth/signOn/SignOn';
import Main from '../../screens/auth/main/Main';

import { RootStackParams } from './types';

const AuthStack: React.FC = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Registration"
          component={SignOn}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
