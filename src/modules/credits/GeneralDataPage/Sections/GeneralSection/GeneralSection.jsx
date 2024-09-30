import React from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomDropdown from '../../../../../components/CustomDropdown';
import CustomDropdownSearch from '../../../../../components/CustomDropdownSearch';

// Arreglo de configuración para los campos de datos básicos
const basicClientDataFields = [
  { label: 'First Name', name: 'firstName', component: 'TextField', placeholder: 'Enter First Name' },
  { label: 'Last Name', name: 'secondName', component: 'TextField', placeholder: 'Enter Last Name' },
  { label: 'Nickname', name: 'nickname', component: 'TextField', placeholder: 'Enter Nickname' },
  { label: 'Identification Type', name: 'identificationType', component: 'CustomDropdown', options: [{ name: 'DNI', value: 'dni' }, { name: 'Passport', value: 'passport' }] },
  { label: 'DNI Number', name: 'identification', component: 'TextField', placeholder: 'Enter DNI Number' },
  { label: 'Nationality', name: 'country', component: 'CustomDropdownSearch', options: [{ name: 'Honduras', value: '95' }, { name: 'USA', value: 'usa' }] },
  { label: 'Birth Place', name: 'birthPlace', component: 'TextField', placeholder: 'Enter Birth Place' },
  { label: 'Birth Date', name: 'birthDate', component: 'Date', placeholder: 'Select Birth Date' },
  { label: 'Gender', name: 'gender', component: 'CustomDropdown', options: [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }] },
  { label: 'Civil State', name: 'civilState', component: 'CustomDropdown', options: [{ name: 'Single', value: 'single' }, { name: 'Married', value: 'married' }] },
  { label: 'Education Level', name: 'educationLevel', component: 'CustomDropdown', options: [{ name: 'High School', value: 'highSchool' }, { name: 'Bachelor', value: 'bachelor' }] },
  { label: 'Number of Dependents', name: 'dependents', component: 'TextField', placeholder: 'Enter Number of Dependents' },
  { label: 'Dependent Children', name: 'children', component: 'TextField', placeholder: 'Enter Number of Children' },
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
      onSubmit={(values) => {
        console.log(values);
        // Aquí puedes manejar el envío de datos
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={className('p-4')}>
          <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
            Basic Client Data
          </Text>
          {basicClientDataFields.map((field, index) => (
            <View key={index} style={className('mb-4')}>
              <Text style={className('text-lg font-semibold mb-2')}>{field.label}</Text>
              {field.component === 'TextField' && (
                <TextInput
                  style={className('border p-2 rounded')}
                  placeholder={field.placeholder}
                  onChangeText={handleChange(field.name)}
                  value={values[field.name]}
                />
              )}
              {field.component === 'CustomDropdown' && (
                <CustomDropdown
                  options={field.options}
                  selectedValue={values[field.name]}
                  onValueChange={handleChange(field.name)}
                />
              )}
              {field.component === 'CustomDropdownSearch' && (
                <CustomDropdownSearch
                  options={field.options}
                  selectedValue={values[field.name]}
                  onValueChange={handleChange(field.name)}
                />
              )}
              {field.component === 'Date' && (
                <TextInput
                  style={className('border p-2 rounded')}
                  placeholder={field.placeholder}
                  onChangeText={handleChange(field.name)}
                  value={values[field.name]}
                />
              )}
            </View>
          ))}
          <Button title="Submit" onPress={handleSubmit} color="#1E90FF" />
        </ScrollView>
      )}
    </Formik>
  );
};

export default GeneralSection;