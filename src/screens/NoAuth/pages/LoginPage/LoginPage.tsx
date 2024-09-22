import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { className } from '../../../../utils/className'

export default function LoginPage({ navigation }) {
  return (
    <View>
          <Text style={className("bg-gray-800 font-bold text-white")}>LoginPage</Text>
          <ScrollView>
            <Button title='Go to Login' onPress={() => navigation.navigate('Login')} />
            <Button title='Go to Register' onPress={() => navigation.navigate('Register')} />
            <Button title='Go to UpdatePassword' onPress={() => navigation.navigate('UpdatePassword')} />
        </ScrollView>
    </View>
  )
}

