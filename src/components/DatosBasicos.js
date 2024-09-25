import React from 'react';
import { View, Text, TextInput } from 'react-native';
import CustomDropdown from './CustomDropdown';
import { className } from '../utils/className';

const DatosBasicos = ({ handleChange, handleBlur, values, errors, touched }) => {
  const tipoPersonaOptions = [
    { name: 'Seleccionar', value: '' },
    { name: 'Natural', value: 'natural' },
    { name: 'Jurídica', value: 'juridica' },
  ];

  const generoOptions = [
    { name: 'Seleccionar', value: '' },
    { name: 'Masculino', value: 'masculino' },
    { name: 'Femenino', value: 'femenino' },
    { name: 'Otro', value: 'otro' },
  ];

  const estadoCivilOptions = [
    { name: 'Seleccionar', value: '' },
    { name: 'Soltero', value: 'soltero' },
    { name: 'Casado', value: 'casado' },
    { name: 'Divorciado', value: 'divorciado' },
    { name: 'Viudo', value: 'viudo' },
  ];

  return (
    <View style={className('mb-6')}>
      <Text style={className('text-xl font-semibold mb-4')}>Datos Básicos</Text>

      {/* Tipo de Persona */}
      <View style={className('mb-4')}>
        <Text>Tipo de Persona</Text>
        <CustomDropdown
          options={tipoPersonaOptions}
          selectedValue={values.tipoPersona}
          onValueChange={handleChange('tipoPersona')}
        />
        {errors.tipoPersona && touched.tipoPersona && (
          <Text style={className('text-red-500')}>{errors.tipoPersona}</Text>
        )}
      </View>

      {/* Nombres */}
      <View style={className('mb-4')}>
        <Text>Nombres</Text>
        <TextInput
          style={className('border p-2 rounded')}
          onChangeText={handleChange('nombres')}
          onBlur={handleBlur('nombres')}
          value={values.nombres}
        />
        {errors.nombres && touched.nombres && (
          <Text style={className('text-red-500')}>{errors.nombres}</Text>
        )}
      </View>

      {/* Apellidos */}
      <View style={className('mb-4')}>
        <Text>Apellidos</Text>
        <TextInput
          style={className('border p-2 rounded')}
          onChangeText={handleChange('apellidos')}
          onBlur={handleBlur('apellidos')}
          value={values.apellidos}
        />
        {errors.apellidos && touched.apellidos && (
          <Text style={className('text-red-500')}>{errors.apellidos}</Text>
        )}
      </View>

      {/* Fecha de Nacimiento */}
      <View style={className('mb-4')}>
        <Text>Fecha de Nacimiento</Text>
        <TextInput
          style={className('border p-2 rounded')}
          onChangeText={handleChange('fechaNacimiento')}
          onBlur={handleBlur('fechaNacimiento')}
          value={values.fechaNacimiento}
          placeholder="YYYY-MM-DD"
        />
        {errors.fechaNacimiento && touched.fechaNacimiento && (
          <Text style={className('text-red-500')}>{errors.fechaNacimiento}</Text>
        )}
      </View>

      {/* Género */}
      <View style={className('mb-4')}>
        <Text>Género</Text>
        <CustomDropdown
          options={generoOptions}
          selectedValue={values.genero}
          onValueChange={handleChange('genero')}
        />
        {errors.genero && touched.genero && (
          <Text style={className('text-red-500')}>{errors.genero}</Text>
        )}
      </View>

      {/* Estado Civil */}
      <View style={className('mb-4')}>
        <Text>Estado Civil</Text>
        <CustomDropdown
          options={estadoCivilOptions}
          selectedValue={values.estadoCivil}
          onValueChange={handleChange('estadoCivil')}
        />
        {errors.estadoCivil && touched.estadoCivil && (
          <Text style={className('text-red-500')}>{errors.estadoCivil}</Text>
        )}
      </View>

      {/* Nacionalidad */}
      <View style={className('mb-4')}>
        <Text>Nacionalidad</Text>
        <TextInput
          style={className('border p-2 rounded')}
          onChangeText={handleChange('nacionalidad')}
          onBlur={handleBlur('nacionalidad')}
          value={values.nacionalidad}
        />
        {errors.nacionalidad && touched.nacionalidad && (
          <Text style={className('text-red-500')}>{errors.nacionalidad}</Text>
        )}
      </View>
    </View>
  );
};

export default DatosBasicos;