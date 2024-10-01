import { View, Text, ScrollView, Button } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreditListPage from '../Pages/CreditListPage';
import StackNavCreditManagement from '../../CreditRequestManager/Router/StackNavCreditManagement';

const Stack = createNativeStackNavigator();

function CreditListStackNav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ animation: 'slide_from_right', headerShown: false }}>
      <Stack.Screen name="Home" component={CreditListPage} />
      <Stack.Screen
        name="CreditManagement"
        component={StackNavCreditManagement}
      />
    </Stack.Navigator>
  );
}

export default CreditListStackNav;
