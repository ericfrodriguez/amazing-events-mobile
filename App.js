import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer';

export default function App() {

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}



