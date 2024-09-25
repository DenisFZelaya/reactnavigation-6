import { View, Text, ScrollView, Button, TextInput, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { className } from '../../../../utils/className'
import { Formik } from 'formik';
import CustomDropdown from '../../../../components/CustomDropdown';
import CustomDropdownSearch from '../../../../components/CustomDropdownSearch';

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const handleLogin = () => {
        // Aquí iría la lógica de inicio de sesión
        console.log('Login with:', email, password);
    };

    const options = [
        { name: 'Honduras', value: '95' },
        { name: 'Option 2', value: 'option2' },
        { name: 'Option 3', value: 'option3' },
        { name: 'Another Option', value: 'anotherOption' },
    ];

    return (
        <View
            style={className("bg-white h-full flex flex-1")}
        >
            <Switch value={true} />
            <CustomDropdownSearch
                options={options}
                selectedValue={selectedValue}
                onValueChange={setSelectedValue}
            />

            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    }

                    return errors;
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <ScrollView
                        contentContainerStyle={className("w-full max-w-md p-6 rounded-2xl")}>
                        <View style={className("text-center")}>
                            <Text style={className("text-2xl text-black")}>Bienvenido de nuevo</Text>
                            <Text style={className("mt-2 text-sm text-gray-600")}>Inicia sesión para continuar</Text>
                        </View>
                        <Text>Values: {JSON.stringify(values)}</Text>
                        <Text>Erros: {JSON.stringify(errors)}</Text>
                        <View style={className("mt-8")}>
                            <View>
                                <Text>Selected: {selectedValue}</Text>
                                <CustomDropdown
                                    options={options}
                                    selectedValue={selectedValue}
                                    onValueChange={handleChange('country')}
                                />
                            </View>
                            <View style={className("rounded-md")}>
                                <TextInput
                                    style={className("rounded-t-md border bg-gray-100 border-gray-300 p-2")}
                                    placeholder="Correo electrónico"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values?.email}
                                />

                                {errors?.email &&
                                    <Text style={className("text-red-400")}>{errors?.email}</Text>
                                }

                                <TextInput
                                    style={className("rounded-b-md border bg-gray-100 border-gray-300 p-2")}
                                    placeholder="Contraseña"
                                    secureTextEntry
                                    textContentType="password"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values?.password}
                                />

                                {errors?.password &&
                                    <Text style={className("text-red-400")}>{errors?.password}</Text>
                                }

                            </View>

                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={className("py-6 mt-2 relative w-full flex justify-center text-center bg-indigo-600 px-4 border border-transparent rounded-md")}
                            >
                                <Text
                                    style={className("w-full text-center text-lg text-white font-medium absolute flex items-center pl-3")}>
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
                                    <Text style={className("text-red-600")}>Facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={className("w-1/3 flex flex-row items-center justify-center border border-gray-300 rounded-md p-2")}>
                                    <Text style={className("text-red-600")}>Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={className("w-1/3 flex flex-row items-center justify-center border border-gray-300 rounded-md p-2")}>
                                    <Text style={className("text-red-500")}>Microsoft</Text>
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
                                    Registrarse <Text style={className("h-4 w-4")}>ICON</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )}
            </Formik>


        </View>
    )
}

