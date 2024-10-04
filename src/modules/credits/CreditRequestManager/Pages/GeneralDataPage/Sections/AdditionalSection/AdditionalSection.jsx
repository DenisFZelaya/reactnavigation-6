import React from 'react';
import { View, Text, ScrollView, Button, TouchableHighlight } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';

const ADDITIONAL_FIELDS = [
  {
    label: 'Datos Adicionales',
    subLabel: 'Información adicional del solicitante',
    component: 'Title',
  },
  {
    label: 'Grupo Económico',
    name: 'grupoEconomico',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el grupo económico',
    columns: 2,
    options: [
      { name: 'Grupo A', value: 'grupoA' },
      { name: 'Grupo B', value: 'grupoB' },
      { name: 'Grupo C', value: 'grupoC' },
    ],
  },
  {
    label: 'Sector Económico',
    name: 'sectorEconomico',
    component: 'CustomDropdownSearch',
    placeholder: 'Buscar sector económico',
    columns: 2,
    options: [
      { name: 'Agricultura', value: 'agricultura' },
      { name: 'Industria', value: 'industria' },
      { name: 'Servicios', value: 'servicios' },
      // Añade más opciones según sea necesario
    ],
  },
  {
    label: 'Medio de comunicación principal',
    name: 'medioComunicacion',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el medio de comunicación',
    options: [
      { name: 'Email', value: 'email' },
      { name: 'Teléfono', value: 'telefono' },
      { name: 'WhatsApp', value: 'whatsapp' },
    ],
  },
  {
    label: 'Email',
    name: 'email',
    component: 'TextField',
    placeholder: 'Ingrese el email',
    customProps: {
      keyboardType: 'email-address',
    },
  },
];

/**
 * AdditionalSection - Componente para la sección de datos adicionales del solicitante.
 * @returns {JSX.Element} Componente de React
 */
const AdditionalSection = () => {
  const initialValues = {
    grupoEconomico: '',
    sectorEconomico: '',
    medioComunicacion: '',
    email: '',
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
              {ADDITIONAL_FIELDS.map((field, index) => (
                <CustomField
                  field={field}
                  handleChange={handleChange}
                  values={values}
                  key={index}
                />
              ))}

            </View>

            <TouchableHighlight
              style={className('bg-green-500 p-3 rounded-lg')}
              title="Guardar"
              onPress={handleSubmit}

            >
              <Text style={className('text-white font-bold')} >Guardar</Text>
            </TouchableHighlight>
            <Text style={className('mt-4 text-sm text-gray-600')}>
              {JSON.stringify(values, null, 2)}
            </Text>
          </View>

        )}
      </Formik>
    </ScrollView>
  );
};

export default AdditionalSection;