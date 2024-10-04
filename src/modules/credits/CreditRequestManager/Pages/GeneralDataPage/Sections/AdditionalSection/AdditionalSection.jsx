import React from 'react';
import { View, Text, ScrollView, Button, TouchableHighlight } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';
import CATALOGS from '../../../../../../../constants/CATALOGS.json'

const ADDITIONAL_FIELDS = [
  {
    label: 'Datos Adicionales',
    subLabel: 'Información adicional del solicitante',
    component: 'Title',
  },
  {
    label: 'Sector Económico',
    name: 'sectorEconomico',
    component: 'CustomDropdownSearch',
    placeholder: 'Buscar sector económico',
    options: CATALOGS.economicSectors,
  },
  {
    label: 'Grupo Económico',
    name: 'grupoEconomico',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el grupo económico',
    columns: 2,
    options: CATALOGS.economicGroups
  },

  {
    label: 'Medio de comunicación principal',
    name: 'medioComunicacion',
    component: 'CustomDropdown',
    placeholder: 'Medio de comunicación',
    columns: 2,
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