import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import TopTabsNavigation from './TopTabsNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import NativeStackNavigation from './NativeStackNavigation';
import tw from 'tailwind-react-native-classnames';
import StackNavCreditManagement from '../modules/credits/StackNavCreditManagement';

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

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} style={tw`bg-gray-100`}>
            <View style={tw`p-4 mb-4 bg-blue-500`}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={tw`w-20 h-20 rounded-full mb-2`}
                />
                <Text style={tw`text-white text-lg font-bold`}>John Doe</Text>
                <Text style={tw`text-white text-sm`}>john@example.com</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => {/* Implementa la lógica de logout aquí */ }}
                icon={({ color, size }) => (
                    <Text>ola</Text>
                )}
                style={tw`mt-4`}
                labelStyle={tw`text-red-500`}
            />
        </DrawerContentScrollView>
    );
}


    const DrawerNavigation = () => {
        const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: "#4299e1", // Un azul más suave
                drawerActiveTintColor: "#ffffff",
                drawerInactiveTintColor: "#4a5568",
                drawerLabelStyle: tw`text-base font-medium`,
                headerStyle: tw`bg-blue-500`,
                headerTintColor: "#ffffff",
                headerTitleStyle: tw`font-bold`,
            
            }}>   
            <Drawer.Screen name="Solicitudes" component={StackNavCreditManagement} />
            <Drawer.Screen name="Top Navigation"
                component={TopTabsNavigation}
                options={{
                    drawerIcon: ({ color, size }) => (
                      <Text >Hola 2</Text>
                    ),
                  }}
            />
            <Drawer.Screen name="Bottom Navigation" component={BottomTabNavigation} />
            <Drawer.Screen name="Stack Navigation" component={NativeStackNavigation} />
            
        </Drawer.Navigator>
    )
}

export default DrawerNavigation




