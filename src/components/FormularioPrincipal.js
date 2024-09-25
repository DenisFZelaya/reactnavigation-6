import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { className } from '../utils/className';
import DatosBasicos from './DatosBasicos';


const FormularioPrincipal = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.tipoPersona) {
            errors.tipoPersona = 'Requerido';
        }
        if (!values.nombres) {
            errors.nombres = 'Requerido';
        }
        if (!values.apellidos) {
            errors.apellidos = 'Requerido';
        }
        if (!values.fechaNacimiento) {
            errors.fechaNacimiento = 'Requerido';
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.fechaNacimiento)) {
            errors.fechaNacimiento = 'Formato de fecha inválido';
        }
        if (!values.genero) {
            errors.genero = 'Requerido';
        }
        if (!values.estadoCivil) {
            errors.estadoCivil = 'Requerido';
        }
        if (!values.nacionalidad) {
            errors.nacionalidad = 'Requerido';
        }
        return errors;
    };

    const initialValues = {
        tipoPersona: '',
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        genero: '',
        estadoCivil: '',
        nacionalidad: '',
    };

    const handleSubmit = (values) => {
        console.log('Datos Básicos:', values);
        // Implement submission logic as needed
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
            }) => (
                <ScrollView style={className('p-4')}>
                    <Text>{JSON.stringify(values)}</Text>
                    <Text style={className('text-2xl font-bold mb-6')}>Formulario de Datos Básicos</Text>

                    <DatosBasicos
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                    />

                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={className('bg-green-500 p-4 rounded mt-4')}
                    >
                        <Text style={className('text-white text-center font-semibold')}>
                            Guardar Datos Básicos
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </Formik>
    );
};

export default FormularioPrincipal;