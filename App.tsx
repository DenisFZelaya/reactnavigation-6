
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import NoAuthStackNav from './src/screens/NoAuth/NoAuthStackNav';

function App(): JSX.Element {
  const isAuth = true

  return (
    <NavigationContainer>
      {
        isAuth ? <DrawerNavigation /> : <NoAuthStackNav />
      }
    </NavigationContainer>
  );
}
export default App;
 