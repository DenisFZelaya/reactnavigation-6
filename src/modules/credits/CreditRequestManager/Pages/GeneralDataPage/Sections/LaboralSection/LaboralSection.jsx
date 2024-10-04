import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';
import CATALOGS from '../../../../../../../constants/CATALOGS.json'

const LABOR_FIELDS = [
  {
    label: 'Datos Laborales',
    subLabel: 'Información laboral del solicitante',
    component: 'Title',
  },
  {
    label: 'Ocupación',
    name: 'ocupacion',
    component: 'CustomDropdownSearch',
    placeholder: 'Seleccione la ocupación',
    columns: 2,
    options: CATALOGS.ocupations,
  },
  {
    label: 'Tipo de Empleado',
    name: 'tipoEmpleado',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el tipo de empleado',
    columns: 2,
    options: [
      { name: 'Tiempo completo', value: 'tiempo_completo' },
      { name: 'Medio tiempo', value: 'medio_tiempo' },
      { name: 'Freelance', value: 'freelance' },
    ],
  },
  {
    label: 'Sabe Leer',
    name: 'sabeLeer',
    component: 'Switch',
    placeholder: '¿Sabe leer?',
    columns: 2,
  },
  {
    label: 'Sabe Escribir',
    name: 'sabeEscribir',
    component: 'Switch',
    placeholder: '¿Sabe escribir?',
    columns: 2,
  },

  {
    label: 'Salario/Ingreso Mensual',
    name: 'salarioMensual',
    component: 'TextField',
    placeholder: 'Ingrese el salario mensual',
    columns: 2,
    customProps: {
      keyboardType: 'numeric',
    },
  },
  {
    label: 'Otros Ingresos',
    name: 'otrosIngresos',
    component: 'TextField',
    placeholder: 'Ingrese otros ingresos',
    columns: 2,
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
    placeholder: 'Cargo o Puesto',
    columns: 2,
  },
  {
    label: 'Fecha de inicio a trabajar',
    name: 'fechaInicioTrabajo',
    component: 'Date',
    placeholder: 'Seleccione la fecha de inicio',
    columns: 2,
  },
  {
    label: 'Teléfono',
    name: 'telefonoNegocio',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono del negocio',
    columns: 2,
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Teléfono Fax',
    name: 'telefonoFax',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono fax',
    columns: 2,
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
    console.log(valus);
    // Aquí puedes manejar el envío de datos
  };

  return (
    <ScrollView style={className('p-4 bg-white')}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View>


            <View style={className('flex flex-row flex-wrap ')}>
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

            </View>
            <Button style={className('w-full')} title="Guardar" onPress={handleSubmit} color="#1E90FF" />
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