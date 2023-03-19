import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopTabsNavigation from './TopTabsNavigation';

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
            <Drawer.Screen name="Feed" component={TopTabsNavigation} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation




