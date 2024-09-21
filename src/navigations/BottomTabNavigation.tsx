import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Test} />
            <Tab.Screen name="Settings" component={Test} />
            <Tab.Screen name="Menu" component={Test} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation


function Test() {
    return (
        <Text style={tw`bg-gray-400 text-white text-xl`}>Hello, Tailwind CSS in React Native!</Text>
    );
}