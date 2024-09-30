import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { className } from '../../../utils/className';

/**
 * CreditListPage - Página principal para la gestión de créditos.
 * @param {object} navigation - Objeto de navegación para cambiar de pantallas.
 */
export default function CreditListPage({ navigation }) {
  return (
    <ScrollView style={className('h-full bg-gray-100 p-4')}>
      <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Credit Management
      </Text>
      
      {/* Card de Información de Centrales de Riesgo */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>Risk Center Information</Text>
        <Button
          title="View Details"
          color="#1E90FF"
          onPress={() => navigation.navigate('RiskCenterDetails')}
        />
      </View>

      {/* Datos Generales */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>General Data</Text>
        <Button
          title="Go to General Data"
          color="#1E90FF"
          onPress={() => navigation.navigate('GeneralData')}
        />
      </View>

      {/* Solicitud */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>Request</Text>
        <Button
          title="Go to Request"
          color="#1E90FF"
          onPress={() => navigation.navigate('RequestDetails')}
        />
      </View>

      {/* Avales Garantías */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>Guarantees</Text>
        <Button
          title="Add Guarantee"
          color="#1E90FF"
          onPress={() => navigation.navigate('AddGuarantee')}
        />
      </View>

      {/* Evaluación Financiera */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>Financial Evaluation</Text>
        <Button
          title="Go to Financial Evaluation"
          color="#1E90FF"
          onPress={() => navigation.navigate('FinancialEvaluation')}
        />
      </View>

      {/* Referencias */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>References</Text>
        <Button
          title="Add Reference"
          color="#1E90FF"
          onPress={() => navigation.navigate('AddReference')}
        />
      </View>

      {/* Fotos del Negocio */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>Business Photos</Text>
        <Button
          title="View Business Photos"
          color="#1E90FF"
          onPress={() => navigation.navigate('BusinessPhotos')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    ...className('bg-white p-6 mb-4 rounded-lg'),
  },
});