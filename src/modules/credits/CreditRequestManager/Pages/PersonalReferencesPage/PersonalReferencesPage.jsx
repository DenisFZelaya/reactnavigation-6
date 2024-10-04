import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';
import ModalReferences from '../../../../../components/ModalReferences';

const REFERENCE_FIELDS = [
  {
    label: 'Tipo de Referencia',
    name: 'tipoReferencia',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el tipo de referencia',
    options: [
      { name: 'Personal', value: 'personal' },
      { name: 'Comercial', value: 'comercial' },
      { name: 'Bancaria', value: 'bancaria' },
    ],
  },
  {
    label: 'Nombre del Referente',
    name: 'nombreReferente',
    component: 'TextField',
    placeholder: 'Nombre del Referente',
  },
  {
    label: 'Es Familiar',
    name: 'esFamiliar',
    component: 'Switch',
    placeholder: '¿Es familiar?',
    columns: 2,
  },
  {
    label: 'Relación',
    name: 'relacion',
    component: 'TextField',
    placeholder: 'Relación con el solicitante',
    columns: 2,
  },
  {
    label: 'Dirección Actual',
    name: 'direccionActual',
    component: 'TextField',
    placeholder: 'Dirección Actual',
    customProps: {
      multiline: true,
      numberOfLines: 3,
    },
  },
  {
    label: 'Tipo de Residencia',
    name: 'tipoResidencia',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el tipo de residencia',
    columns: 2,
    options: [
      { name: 'Propia', value: 'propia' },
      { name: 'Alquilada', value: 'alquilada' },
      { name: 'Familiar', value: 'familiar' },
    ],
  },
  {
    label: 'Tiempo de Residir',
    name: 'tiempoResidencia',
    component: 'CustomDropdown',
    placeholder: 'Seleccione el tiempo de residencia',
    columns: 2,
    options: [
      { name: 'Menos de 1 año', value: 'menos1' },
      { name: '1-5 años', value: '1-5' },
      { name: 'Más de 5 años', value: 'mas5' },
    ],
  },
  {
    label: 'Teléfono de Residencia',
    name: 'telefonoResidencia',
    component: 'TextField',
    placeholder: 'Teléfono de Residencia',
    columns: 2,
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Teléfono Móvil',
    name: 'telefonoMovil',
    component: 'TextField',
    placeholder: 'Teléfono Móvil',
    columns: 2,
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Teléfono de Trabajo',
    name: 'telefonoTrabajo',
    component: 'TextField',
    placeholder: 'Teléfono de Trabajo',
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Correo Electrónico',
    name: 'correoElectronico',
    component: 'TextField',
    placeholder: 'Correo Electrónico',
    customProps: {
      keyboardType: 'email-address',
    },
  },

  {
    label: 'Observación',
    name: 'observacion',
    component: 'TextField',
    placeholder: 'Observaciones',
    customProps: {
      multiline: true,
      numberOfLines: 4,
    },
  },
];

/**
 * PersonalReferencesPage - Componente para la gestión de referencias personales.
 * @returns {JSX.Element} Componente de React
 */
const PersonalReferencesPage = () => {
  const [references, setReferences] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const initialValues = {
    tipoReferencia: '',
    nombreReferente: '',
    esFamiliar: false,
    direccionActual: '',
    tipoResidencia: '',
    tiempoResidencia: '',
    telefonoResidencia: '',
    telefonoMovil: '',
    telefonoTrabajo: '',
    correoElectronico: '',
    relacion: '',
    observacion: '',
  };

  /**
   * Maneja el envío del formulario de referencias.
   * @param {Object} values - Valores del formulario
   */
  const handleSubmit = (values) => {
    if (isEditing) {
      const updatedReferences = [...references];
      updatedReferences[editingIndex] = values;
      setReferences(updatedReferences);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setReferences([...references, values]);
    }
    console.log(values);
    // Aquí puedes manejar el envío de datos al servidor o almacenamiento local
  };

  /**
   * Inicia la edición de una referencia existente.
   * @param {number} index - Índice de la referencia a editar
   */
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
  };

  /**
   * Elimina una referencia existente.
   * @param {number} index - Índice de la referencia a eliminar
   */
  const handleDelete = (index) => {
    const updatedReferences = references.filter((_, i) => i !== index);
    setReferences(updatedReferences);
  };

  return (
    <ScrollView style={className('p-4 bg-white')}>
      <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Referencias Personales
      </Text>

      <FlatList
        data={references}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={className('bg-gray-100 p-4 mb-4 rounded-lg')}>
            <Text style={className('font-bold')}>{item.nombreReferente}</Text>
            <Text>{item.tipoReferencia}</Text>
            <View style={className('flex-row justify-end mt-2')}>
              <TouchableOpacity onPress={() => handleEdit(index)} style={className('mr-2')}>
                <Text style={className('text-blue-500')}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text style={className('text-red-500')}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <ModalReferences title={isEditing ? 'Editar Referencia' : 'Agregar Nueva Referencia'}>
        <Formik
          initialValues={isEditing ? references[editingIndex] : initialValues}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, values }) => (
            <ScrollView>
              <View>
                <View style={className('flex flex-row flex-wrap ')}>

                  {REFERENCE_FIELDS.map((field, index) => (
                    <CustomField
                      field={field}
                      handleChange={handleChange}
                      values={values}
                      key={index}
                    />
                  ))}
                </View>



                <Button
                  title={isEditing ? "Actualizar Referencia" : "Agregar Referencia"}
                  onPress={handleSubmit}
                  color="#1E90FF"
                />
                <Text>
                  {JSON.stringify(values)}
                </Text>
              </View>
            </ScrollView>

          )}
        </Formik>
      </ModalReferences>


    </ScrollView>
  );
};

export default PersonalReferencesPage;