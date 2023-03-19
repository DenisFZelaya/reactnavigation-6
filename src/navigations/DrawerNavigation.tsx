import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

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
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation




