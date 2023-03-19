
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NativeStackNavigation from './src/navigations/NativeStackNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeStackNavigation />
    </NavigationContainer>
  );
}
export default App;
