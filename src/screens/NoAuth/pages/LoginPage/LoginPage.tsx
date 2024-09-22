import { View, Text, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { className } from '../../../../utils/className'

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aquí iría la lógica de inicio de sesión
        console.log('Login with:', email, password);
    };

    //            <Button title='Go to Login' onPress={() => navigation.navigate('Login')} />
    // <Button title='Go to Register' onPress={() => navigation.navigate('Register')} />
    // <Button title='Go to UpdatePassword' onPress={() => navigation.navigate('UpdatePassword')} />

    return (
        <View
            style={className("bg-white h-full flex flex-1 space-around")}
        >
            <ScrollView
                contentContainerStyle={className("w-full max-w-md p-6 rounded-2xl")}>
                <View style={className("text-center")}>
                    <Text style={className("text-2xl text-black")}>Bienvenido de nuevo</Text>
                    <Text style={className("mt-2 text-sm text-gray-600")}>Inicia sesión para continuar</Text>
                </View>
                <View style={className("mt-8")}>
                    <View style={className("rounded-md")}>
                        <TextInput
                            style={className("rounded-t-md border bg-gray-100 border-gray-300 p-2")}
                            placeholder="Correo electrónico"

                            value={email}
                            onChangeText={setEmail}
                            // autoCompleteType="email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        // required
                        />
                        <TextInput
                            style={className("rounded-b-md border bg-gray-100 border-gray-300 p-2")}
                            placeholder="Contraseña"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            // autoCompleteType="password"
                            textContentType="password"
                        // required
                        />
                    </View>

                    <TouchableOpacity
                        onPress={handleLogin}
                        style={className("py-6 mt-2 relative w-full flex justify-center text-center bg-indigo-600 px-4 border border-transparent rounded-md")}
                    >
                        <Text style={className("w-full text-center text-lg text-white font-medium absolute flex items-center pl-3")}>
                            Iniciar sesión
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={className("mt-6")}>
                    <View style={className("relative")}>
                        <View style={className("absolute inset-0 flex items-center")}>
                            <View style={className("w-full border-t border-gray-300")} />
                        </View>
                        <View style={className("relative flex justify-center text-sm")}>
                            <Text style={className("px-2 bg-white text-gray-500")}>O continúa con</Text>
                        </View>
                    </View>

                    <View style={className("mt-6 flex flex-row justify-between")}>
                        <TouchableOpacity
                            style={className("w-1/3 flex flex-row items-center justify-center border border-gray-300 rounded-md p-2")}>
                            <Text style={className("ml-2 text-red-600")}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={className("w-1/3 flex flex-row items-center justify-center border border-gray-300 rounded-md p-2")}>
                            <Text style={className("text-red-600")}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={className("w-1/3 flex flex-row items-center justify-center border border-gray-300 rounded-md p-2")}>
                            <Text style={className("text-blue-500")}>Microsoft</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={className("flex flex-row justify-between")}>
                    <TouchableOpacity onPress={() => {/* Lógica para olvidar contraseña */ }}>
                        <Text style={className("font-medium")}>
                            ¿Olvidaste tu contraseña?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={className("font-medium")}>
                            Registrarse <Text style={className(" h-4 w-4")}>ICON</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

