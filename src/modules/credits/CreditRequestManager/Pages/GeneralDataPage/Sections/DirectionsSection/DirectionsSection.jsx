import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../../../utils/className';
import CustomField from '../../../../../../../components/CustomField';

const SECTION_FIELDS_1 = [
  {
    label: 'Domicilio',
    subLabel: 'Domicilio del solicitante',
    component: 'Title',
  },
  {
    label: 'Estado/Departamento',
    name: 'estado',
    component: 'CustomDropdownSearch',
    placeholder: 'Estado/Departamento',
    columns: 2,
    options: [
      { name: 'DNI', value: 'dni' },
      { name: 'Passport', value: 'passport' },
    ],
  },
  {
    label: 'Ciudad/Municipio',
    name: 'ciudad',
    component: 'CustomDropdownSearch',
    placeholder: 'Ciudad/Municipio',
    columns: 2,
    options: [
      { name: 'DNI', value: 'dni' },
      { name: 'Passport', value: 'passport' },
    ],
  },
  {
    label: 'Barrio/Colonia',
    name: 'barrio',
    component: 'CustomDropdownSearch',
    placeholder: 'Barrio/Colonia',
    columns: 2,
    options: [
      { name: 'DNI', value: 'dni' },
      { name: 'Passport', value: 'passport' },
    ],
  },
  {
    label: 'Aldea/Barrio',
    name: 'aldea',
    component: 'CustomDropdownSearch',
    columns: 2,
    placeholder: 'Aldea/Barrio',
    options: [
      { name: 'DNI', value: 'dni' },
      { name: 'Passport', value: 'passport' },
    ],
  },
  {
    label: 'Dirección Completa  ',
    name: 'direccionCompleta',
    component: 'TextField',
    placeholder: 'Dirección Completa',
    customProps: {
      multiline: true,
      numberOfLines: 3
    }
  },
  {
    label: 'Tipo de Residencia',
    name: 'tipoResidencia',
    component: 'CustomDropdown',
    placeholder: 'Tipo de Residencia',
    columns: 2,
    options: [
      { name: 'DNI', value: 'dni' },
      { name: 'Passport', value: 'passport' },
    ],
  },
  {
    label: 'Tiempo de Residir',
    name: 'tiempoResidencia',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el tiempo de residencia',
    columns: 2,
    options: [
      { name: 'Menos de 1 año', value: 'menos_1_anio' },
      { name: '1 a 3 años', value: '1_3_anios' },
      { name: '3 a 5 años', value: '3_5_anios' },
      { name: 'Más de 5 años', value: 'mas_5_anios' }
    ]
  },
  {
    label: 'Teléfono Residencia',
    name: 'telefonoResidencia',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono de residencia',
    columns: 2,
    customProps: {
      keyboardType: 'phone-pad'
    }
  },
  {
    label: 'Teléfono Móvil',
    name: 'telefonoMovil',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono móvil',
    columns: 2,
    customProps: {
      keyboardType: 'phone-pad'
    }
  },
];

const SECTION_FIELDS_2 = [
  {
    label: 'Dirección en el Mapa',
    subLabel: 'Dirección en el Mapa del solicitante',
    component: 'Title',
  },
  {
    label: 'Latitud',
    name: 'latitud',
    component: 'TextField',
    placeholder: 'Latitud',
    customProps: {
      keyboardType: 'phone-pad',
      editable: false
    }
  },
  {
    label: 'Longitud',
    name: 'longitud',
    component: 'TextField',
    placeholder: 'Longitud',
    customProps: {
      keyboardType: 'phone-pad',
      editable: false
    }
  },

];

const DirectionsSection = () => {
  const [isMapModalVisible, setIsMapModalVisible] = React.useState(false);

  const initialValues = {
    estado: '',
    ciudad: '',
    barrio: '',
    aldea: '',
    direccionCompleta: 'Prueba Denis Zelaya',
    tipoResidencia: '',
    tiempoResidencia: '',
    telefonoResidencia: '',
    telefonoMovil: '',
    latitud: '',
    longitud: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes manejar el envío de datos
  };

  const handleMapSelection = (latitude, longitude) => {
    // Esta función se llamará cuando el usuario seleccione una ubicación en el mapa
    setIsMapModalVisible(false);
    // Actualizar los valores de latitud y longitud en el formulario
  };

  return (
    <ScrollView style={className('p-4 bg-white')}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View>


            <View style={className('flex flex-row flex-wrap ')}>

              {SECTION_FIELDS_1.map((field, index) => (
                <CustomField
                  field={field}
                  handleChange={handleChange}
                  values={values}
                  key={index}
                />
              ))}
              <Button
                title="Seleccionar Ubicación en Mapa"
                onPress={() => setIsMapModalVisible(true)}
              />
              {SECTION_FIELDS_2.map((field, index) => (
                <CustomField
                  field={field}
                  handleChange={handleChange}
                  values={values}
                  key={index}
                />
              ))}
             
            </View>
            <Button title="Guardar" onPress={handleSubmit} />
              <Text>
                {JSON.stringify(values)}
              </Text>
          </View>
        )}

      </Formik>
      {
        /**
         * <MapModal
        isVisible={isMapModalVisible}
        onClose={() => setIsMapModalVisible(false)}
        onSelectLocation={handleMapSelection}
      />
         */
      }

    </ScrollView>
  );
};

export default DirectionsSection;