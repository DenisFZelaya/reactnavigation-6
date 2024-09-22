import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import tw from 'tailwind-react-native-classnames';

const Stack = createNativeStackNavigator();

function NoAuthStackNav(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{animation: "slide_from_right"}}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="UpdatePassword" component={Home} />
        </Stack.Navigator>
    )
}

function Home({ navigation }): JSX.Element {
    return (
        <ScrollView>
            <Button title='Go to Login' onPress={() => navigation.navigate('Login')} />
            <Button title='Go to Register' onPress={() => navigation.navigate('Register')} />
            <Button title='Go to UpdatePassword' onPress={() => navigation.navigate('UpdatePassword')} />
        </ScrollView>
    )
}

export default NoAuthStackNav;