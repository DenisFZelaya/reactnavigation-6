import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';

const REQUEST_FIELDS = [
  {
    label: 'Datos de la Solicitud',
    subLabel: 'Información de la solicitud de crédito',
    component: 'Title',
  },
  {
    label: 'Tipo de Producto',
    name: 'tipoProducto',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el tipo de producto',
    options: [
      { name: 'Préstamo Personal', value: 'prestamo_personal' },
      { name: 'Crédito Hipotecario', value: 'credito_hipotecario' },
      { name: 'Crédito de Vehículo', value: 'credito_vehiculo' },
      { name: 'Tarjeta de Crédito', value: 'tarjeta_credito' },
    ],
  },
  {
    label: 'Monto Solicitado',
    name: 'montoSolicitado',
    component: 'TextField',
    placeholder: 'Ingrese el monto solicitado',
    customProps: {
      keyboardType: 'numeric',
    },
  },
  {
    label: 'Plazo (en meses)',
    name: 'plazo',
    component: 'TextField',
    placeholder: 'Ingrese el plazo en meses',
    customProps: {
      keyboardType: 'numeric',
    },
  },
  {
    label: 'Destino del Crédito',
    name: 'destinoCredito',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el destino del crédito',
    options: [
      { name: 'Consumo', value: 'consumo' },
      { name: 'Vivienda', value: 'vivienda' },
      { name: 'Negocio', value: 'negocio' },
      { name: 'Educación', value: 'educacion' },
    ],
  },
  {
    label: 'Forma de Pago',
    name: 'formaPago',
    component: 'CustomDropdown',
    placeholder: 'Seleccione la forma de pago',
    options: [
      { name: 'Efectivo', value: 'efectivo' },
      { name: 'Transferencia Bancaria', value: 'transferencia' },
      { name: 'Débito Automático', value: 'debito_automatico' },
    ],
  },
  {
    label: 'Día de Pago',
    name: 'diaPago',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el día de pago',
    options: Array.from({ length: 28 }, (_, i) => ({ name: `${i + 1}`, value: `${i + 1}` })),
  },
  {
    label: 'Frecuencia de Pago',
    name: 'frecuenciaPago',
    component: 'CustomDropdown',
    placeholder: 'Seleccione la frecuencia de pago',
    options: [
      { name: 'Mensual', value: 'mensual' },
      { name: 'Quincenal', value: 'quincenal' },
      { name: 'Semanal', value: 'semanal' },
    ],
  },
  {
    label: 'Observaciones',
    name: 'observaciones',
    component: 'TextField',
    placeholder: 'Ingrese observaciones adicionales',
    customProps: {
      multiline: true,
      numberOfLines: 4,
    },
  },
];

/**
 * RequestSection - Componente para la sección de solicitud de crédito.
 * @returns {JSX.Element} Componente de React
 */
const RequestDetailPage = () => {
  const initialValues = {
    tipoProducto: '',
    montoSolicitado: '',
    plazo: '',
    destinoCredito: '',
    formaPago: '',
    diaPago: '',
    frecuenciaPago: '',
    observaciones: '',
  };

  /**
   * Maneja el envío del formulario.
   * @param {Object} values - Valores del formulario
   */
  const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes manejar el envío de datos
  };

  return (
    <ScrollView style={className('p-4 bg-white')}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View>
            {REQUEST_FIELDS.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            <Button
              title="Guardar Solicitud"
              onPress={handleSubmit}
              color="#1E90FF"
            />
            <Text style={className('mt-4 text-sm text-gray-600')}>
              {JSON.stringify(values, null, 2)}
            </Text>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default RequestDetailPage;