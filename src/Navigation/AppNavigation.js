import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Screens/Home';
import Scaner from '../Screens/Scaner';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scaner" component={Scaner} />
    </Stack.Navigator>
  );
}

export default AppNavigation;