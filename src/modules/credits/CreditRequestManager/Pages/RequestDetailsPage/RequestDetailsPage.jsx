import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';
import CATALOGS from '../../../../../constants/CATALOGS.json'

const REQUEST_FIELDS = [
  {
    label: 'Producto (Tipo de Credito)',
    subLabel: '',
    component: 'Title',
  },
  {
    label: 'Fondo',
    name: 'fondo',
    component: 'CustomDropdown',
    placeholder: 'Fondo',
    columns: 4,
    options: CATALOGS.funds
  },
  {
    label: 'Programa',
    name: 'programa',
    component: 'CustomDropdown',
    placeholder: 'Programa',
    options: CATALOGS.creditPrograms,
  },
  {
    label: 'Clase de Colocaciones (Tipo de Producto)',
    name: 'programa',
    component: 'CustomDropdownSearch',
    placeholder: 'Programa',
    options: CATALOGS.classes,
  },
  {
    label: 'Tipo/Operacion',
    name: 'programa',
    component: 'CustomDropdownSearch',
    placeholder: 'Programa',
    columns: 2,
    options: CATALOGS.operationTypes
  },
  {
    label: 'Tipo Moneda',
    name: 'programa',
    component: 'CustomDropdown',
    placeholder: 'Programa',
    columns: 2,
    options:CATALOGS.currencies
  },
  {
    label: '(Tipo de Credito)',
    subLabel: '',
    component: 'Title',
  },
  {
    label: 'Tipo de Credito',
    name: 'Credito',
    component: 'CustomDropdownSearch',
    placeholder: 'Tipo de Credito',
    columns: 2,
    options: CATALOGS.operationTypes,
  },
  {
    label: 'Actividad Financiada',
    name: 'progFinanciadaama',
    component: 'CustomDropdownSearch',
    placeholder: 'Actividad Financiada',
    columns: 2,
    options: CATALOGS.financialActivities,
  },
  {
    label: 'Monto a Solicitar',
    subLabel: '',
    component: 'Title',
  },
  {
    label: 'Monto Solicitado',
    name: 'montoSolicitado',
    component: 'TextField',
    placeholder: 'Monto solicitado',
    columns: 2,
    customProps: {
      keyboardType: 'numeric',
    },
  },
  {
    label: 'Plazo (en meses)',
    name: 'plazo',
    component: 'TextField',
    placeholder: 'Plazo en meses',
    columns: 2,
    customProps: {
      keyboardType: 'numeric',
    },
  },
  {
    label: 'Destino',
    subLabel: '',
    component: 'Title',
  },
  {
    label: 'Destino del Crédito',
    name: 'destinoCredito',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el destino del crédito',
    options: CATALOGS.destinations,
  },
  {
    label: 'Renegociacion',
    subLabel: '',
    component: 'Title',
  },
  {
    label: 'Tipo',
    name: 'destinoCredito',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el destino del crédito',
    columns: 2,
    options: CATALOGS.renegotiationTypes,
  },
  {
    label: 'Nivel de Riesgo',
    name: 'destinoCredito',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el destino del crédito',
    columns: 2,
    options: [
      { name: 'Consumo', value: 'consumo' },
      { name: 'Vivienda', value: 'vivienda' },
      { name: 'Negocio', value: 'negocio' },
      { name: 'Educación', value: 'educacion' },
    ],
  },
  {
    label: 'Forma de Pago',
    subLabel: 'destinoCredito',
    component: 'Title',
  },
  {
    label: 'Forma de Pago',
    name: 'formaPago',
    component: 'CustomDropdown',
    placeholder: 'Seleccione la forma de pago',
    columns: 2,
    options: [
      { name: 'Efectivo', value: 'efectivo' },
      { name: 'Transferencia Bancaria', value: 'transferencia' },
      { name: 'Débito Automático', value: 'debito_automatico' },
    ],
  },
  {
    label: 'Día de Pago',
    columns: 2,
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
    options: CATALOGS.frequencies,
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
            <View style={className('flex flex-row flex-wrap ')}>
              {REQUEST_FIELDS.map((field, index) => (
                <CustomField
                  field={field}
                  handleChange={handleChange}
                  values={values}
                  key={index}
                />
              ))}
            </View>

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