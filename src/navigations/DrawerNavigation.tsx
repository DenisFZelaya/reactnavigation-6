import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopTabsNavigation from './TopTabsNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import NativeStackNavigation from './NativeStackNavigation';

function Feed() {
    return (
        <Text>Hola Feed</Text>
    )
}

function Article() {
    return (
        <Text>Hola Article</Text>
    )
}

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerActiveBackgroundColor: "gold", headerTitle: "Hello Crack!", headerShadowVisible: true }}>
            <Drawer.Screen name="Top Navigation" component={TopTabsNavigation} />
            <Drawer.Screen name="Bottom Navigation" component={BottomTabNavigation} />
            <Drawer.Screen name="Stack Navigation" component={NativeStackNavigation} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation




