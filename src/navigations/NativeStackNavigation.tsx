import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function NativeStackNavigation(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Home} />
            <Stack.Screen name="Profile" component={Home} />
            <Stack.Screen name="Settings" component={Home} />
        </Stack.Navigator>
    )
}

function Home({ navigation }): JSX.Element {
    return (
        <ScrollView>
            <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Go to Notifications' onPress={() => navigation.navigate('Notifications')} />
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
            <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
        </ScrollView>

    )
}

export default NativeStackNavigation;