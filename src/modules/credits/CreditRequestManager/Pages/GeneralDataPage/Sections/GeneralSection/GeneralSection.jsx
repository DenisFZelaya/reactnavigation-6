import React from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';
import CATALOGS from '../../../../../../../constants/CATALOGS.json'
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
    columns: 2,
  },
  {
    label: 'Identification Type',
    name: 'identificationType',
    component: 'CustomDropdown',
    columns: 2,
    options: CATALOGS.identificationType,
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
    columns: 2,
    options: CATALOGS.countries,
  },
  {
    label: 'Birth Place',
    name: 'birthPlace',
    component: 'TextField',
    placeholder: 'Enter Birth Place',
    columns: 2,
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
    columns: 2,
    options: CATALOGS.genders,
  },

  {
    label: 'Civil State',
    name: 'civilState',
    columns: 2,
    component: 'CustomDropdown',
    options: CATALOGS.civilStatus,
  },
  {
    label: 'Education Level',
    name: 'educationLevel',
    component: 'CustomDropdown',
    options: CATALOGS.educationLevel,
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
    columns: 2,
  },
  {
    label: 'Dependent Children',
    name: 'children',
    component: 'TextField',
    placeholder: 'Enter Number of Children',
    columns: 2,
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
          <View style={className('flex flex-row flex-wrap ')}>
          {basicClientDataFields.map((field, index) => (
            <CustomField
              field={field}
              handleChange={handleChange}
              values={values}
              key={index}
              columns={field?.columns}
            />
          ))}
          </View>
       
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
