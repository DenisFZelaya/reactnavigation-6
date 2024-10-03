import React from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../../utils/className';
import CustomDropdown from '../../../../../../../components/CustomDropdown';
import CustomDropdownSearch from '../../../../../../../components/CustomDropdownSearch';
import CustomField from '../../../../../../../components/CustomField';

// Arreglo de configuración para los campos de datos básicos
const basicClientDataFields = [
  {
    label: 'Información Personal',
    subLabel: 'Información personal del solicitante',
    component: 'Title',
  },
  {
    label: 'First Name',
    name: 'firstName',
    component: 'TextField',
    placeholder: 'Enter First Name',
  },
  {
    label: 'Last Name',
    name: 'secondName',
    component: 'TextField',
    placeholder: 'Enter Last Name',
  },
  {
    label: 'Nickname',
    name: 'nickname',
    component: 'TextField',
    placeholder: 'Enter Nickname',
  },
  {
    label: 'Identification Type',
    name: 'identificationType',
    component: 'CustomDropdown',
    options: [
      { name: 'DNI', value: 'dni' },
      { name: 'Passport', value: 'passport' },
    ],
  },
  {
    label: 'DNI Number',
    name: 'identification',
    component: 'TextField',
    placeholder: 'Enter DNI Number',
  },
  {
    label: 'Nacimiento',
    subLabel: 'Fecha de nacimiento del solicitante',
    component: 'Title',
  },
  {
    label: 'Nationality',
    name: 'country',
    component: 'CustomDropdownSearch',
    options: [
      { name: 'Honduras', value: '95' },
      { name: 'USA', value: 'usa' },
      { name: 'GT', value: 'gt' },
      { name: 'NIC', value: 'nic' },
      { name: 'SV', value: 'sv' },
      { name: 'USAS', value: 'usa2' },
      { name: 'GTS', value: 'gt2' },
      { name: 'NICS', value: 'nic2' },
      { name: 'SVS', value: 'sv2' },
      { name: 'USAEEEE', value: 'usa33' },
      { name: 'GTEE', value: 'gt33' },
      { name: 'NICEE', value: 'nic33' },
      { name: 'SVEE', value: 'sv33' },
      { name: 'USAEEEE', value: 'usa33' },
      { name: 'GTEE', value: 'gt33' },
      { name: 'NICEE', value: 'nic33' },
      { name: 'SVEE', value: 'sv33' },

      { name: 'USAEEsEE', value: 'ussa33' },
      { name: 'GTsEE', value: 'gts33' },
      { name: 'NIsCEE', value: 'nisc33' },
      { name: 'SVsEE', value: 'sv3s3' },
    ],
  },
  {
    label: 'Birth Place',
    name: 'birthPlace',
    component: 'TextField',
    placeholder: 'Enter Birth Place',
  },
  {
    label: 'Birth Date',
    name: 'birthDate',
    component: 'Date',
    placeholder: 'Select Birth Date',
  },
  {
    label: 'Test',
    subLabel: 'Test detallado',
    component: 'Title',
  },
  {
    label: 'Gender',
    name: 'gender',
    component: 'CustomDropdown',
    options: [
      { name: 'Male', value: 'male' },
      { name: 'Female', value: 'female' },
    ],
  },

  {
    label: 'Civil State',
    name: 'civilState',
    component: 'CustomDropdown',
    options: [
      { name: 'Single', value: 'single' },
      { name: 'Married', value: 'married' },
    ],
  },
  {
    label: 'Education Level',
    name: 'educationLevel',
    component: 'CustomDropdown',
    options: [
      { name: 'High School', value: 'highSchool' },
      { name: 'Bachelor', value: 'bachelor' },
    ],
  },
  {
    label: 'Dependientes',
    subLabel: 'Personas que dependen económicamente del solicitante',
    component: 'Title',
  },
  {
    label: 'Number of Dependents',
    name: 'dependents',
    component: 'TextField',
    placeholder: 'Enter Number of Dependents',
  },
  {
    label: 'Dependent Children',
    name: 'children',
    component: 'TextField',
    placeholder: 'Enter Number of Children',
    customProps: {
      inputMode: 'numeric'

    }
  },
];

// Componente para renderizar los campos de datos básicos
const GeneralSection = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        secondName: '',
        nickname: '',
        identificationType: '',
        identification: '',
        country: '',
        birthPlace: '',
        birthDate: '',
        gender: '',
        civilState: '',
        educationLevel: '',
        dependents: '',
        children: '',
      }}
      onSubmit={values => {
        console.log(values);
        // Aquí puedes manejar el envío de datos
      }}>
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={className('p-4 bg-white')}>
          {basicClientDataFields.map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
            />
          ))}
          <Button title="Submit" onPress={handleSubmit} color="#1E90FF" />
          <Text>
            {JSON.stringify(values)}
          </Text>
        </ScrollView>
      )}
    </Formik>
  );
};

export default GeneralSection;
