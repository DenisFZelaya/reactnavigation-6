import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';

const LABOR_FIELDS = [
  {
    label: 'Datos Laborales',
    subLabel: 'Información laboral del solicitante',
    component: 'Title',
  },
  {
    label: 'Ocupación',
    name: 'ocupacion',
    component: 'CustomDropdown',
    placeholder: 'Seleccione la ocupación',
    options: [
      { name: 'Empleado', value: 'empleado' },
      { name: 'Independiente', value: 'independiente' },
      { name: 'Jubilado', value: 'jubilado' },
    ],
  },
  {
    label: 'Sabe Leer',
    name: 'sabeLeer',
    component: 'Switch',
    placeholder: '¿Sabe leer?',
  },
  {
    label: 'Sabe Escribir',
    name: 'sabeEscribir',
    component: 'Switch',
    placeholder: '¿Sabe escribir?',
  },
  {
    label: 'Tipo de Empleado',
    name: 'tipoEmpleado',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el tipo de empleado',
    options: [
      { name: 'Tiempo completo', value: 'tiempo_completo' },
      { name: 'Medio tiempo', value: 'medio_tiempo' },
      { name: 'Freelance', value: 'freelance' },
    ],
  },
  {
    label: 'Salario/Ingreso Mensual',
    name: 'salarioMensual',
    component: 'TextField',
    placeholder: 'Ingrese el salario mensual',
    customProps: {
      keyboardType: 'numeric',
    },
  },
  {
    label: 'Otros Ingresos',
    name: 'otrosIngresos',
    component: 'TextField',
    placeholder: 'Ingrese otros ingresos',
    customProps: {
      keyboardType: 'numeric',
    },
  },
  {
    label: 'Fuente Otros Ingresos',
    name: 'fuenteOtrosIngresos',
    component: 'TextField',
    placeholder: 'Ingrese la fuente de otros ingresos',
  },
];

const BUSINESS_FIELDS = [
  {
    label: 'Datos del Negocio/Empresa',
    subLabel: 'Información del negocio o empresa',
    component: 'Title',
  },
  {
    label: 'Nombre del Negocio/Empresa',
    name: 'nombreNegocio',
    component: 'TextField',
    placeholder: 'Ingrese el nombre del negocio o empresa',
  },
  {
    label: 'Dirección Completa',
    name: 'direccionNegocio',
    component: 'TextField',
    placeholder: 'Ingrese la dirección completa del negocio',
    customProps: {
      multiline: true,
      numberOfLines: 3,
    },
  },
  {
    label: 'Cargo o Puesto',
    name: 'cargoOPuesto',
    component: 'TextField',
    placeholder: 'Ingrese el cargo o puesto',
  },
  {
    label: 'Fecha de inicio a trabajar',
    name: 'fechaInicioTrabajo',
    component: 'Date',
    placeholder: 'Seleccione la fecha de inicio',
  },
  {
    label: 'Teléfono',
    name: 'telefonoNegocio',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono del negocio',
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Teléfono Fax',
    name: 'telefonoFax',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono fax',
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
];

const LaboralSection = () => {
  const initialValues = {
    ocupacion: '',
    sabeLeer: false,
    sabeEscribir: false,
    tipoEmpleado: '',
    salarioMensual: '',
    otrosIngresos: '',
    fuenteOtrosIngresos: '',
    nombreNegocio: '',
    direccionNegocio: '',
    cargoOPuesto: '',
    fechaInicioTrabajo: '',
    telefonoNegocio: '',
    telefonoFax: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes manejar el envío de datos
  };

  return (
    <ScrollView style={className('p-4 bg-white')}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View>
            {LABOR_FIELDS.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            {BUSINESS_FIELDS.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            <Button title="Guardar" onPress={handleSubmit} color="#1E90FF" />
            <Text style={className('mt-4 text-sm text-gray-600')}>
              {JSON.stringify(values, null, 2)}
            </Text>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default LaboralSection;