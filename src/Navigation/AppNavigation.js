import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}