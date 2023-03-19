import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function Home1() {
    return (
        <Text>Home1</Text>
    )

}

function Home2() {
    return (
        <Text>Home2</Text>
    )

}

const TopTabsNavigation = () => {
    return (
        <Tab.Navigator overScrollMode={"always"} screenOptions={{ lazy : true, tabBarScrollEnabled: true }}>
            <Tab.Screen name="Home1" component={Home1} />
            <Tab.Screen name="Home2" component={Home2} />
            <Tab.Screen name="Home3" component={Home2} />
        </Tab.Navigator>
    )
}

export default TopTabsNavigation