import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/Navigation/AppNavigation';


// funcion principal
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;