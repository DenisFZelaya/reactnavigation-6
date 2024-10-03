import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';

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
    placeholder: 'Ingrese el nombre del referente',
  },
  {
    label: 'Es Familiar',
    name: 'esFamiliar',
    component: 'Switch',
    placeholder: '¿Es familiar?',
  },
  {
    label: 'Dirección Actual',
    name: 'direccionActual',
    component: 'TextField',
    placeholder: 'Ingrese la dirección actual',
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
    placeholder: 'Ingrese el teléfono de residencia',
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Teléfono Móvil',
    name: 'telefonoMovil',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono móvil',
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Teléfono de Trabajo',
    name: 'telefonoTrabajo',
    component: 'TextField',
    placeholder: 'Ingrese el teléfono de trabajo',
    customProps: {
      keyboardType: 'phone-pad',
    },
  },
  {
    label: 'Correo Electrónico',
    name: 'correoElectronico',
    component: 'TextField',
    placeholder: 'Ingrese el correo electrónico',
    customProps: {
      keyboardType: 'email-address',
    },
  },
  {
    label: 'Relación',
    name: 'relacion',
    component: 'TextField',
    placeholder: 'Ingrese la relación',
  },
  {
    label: 'Observación',
    name: 'observacion',
    component: 'TextField',
    placeholder: 'Ingrese alguna observación',
    customProps: {
      multiline: true,
      numberOfLines: 3,
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

      <Text style={className('text-xl font-bold mt-6 mb-4')}>
        {isEditing ? 'Editar Referencia' : 'Agregar Nueva Referencia'}
      </Text>

      <Formik
        initialValues={isEditing ? references[editingIndex] : initialValues}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            {REFERENCE_FIELDS.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            <Button 
              title={isEditing ? "Actualizar Referencia" : "Agregar Referencia"}
              onPress={handleSubmit}
              color="#1E90FF"
            />
            <Text>
              {JSON.stringify(values)}
            </Text>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default PersonalReferencesPage;