import {View, Text, StyleSheet, ScrollView, Button, TouchableHighlight} from 'react-native';
import React from 'react';
import {className} from '../../../../../utils/className';

export default function CreditManagement({navigation}) {
  return (
    <ScrollView style={className('h-full bg-gray-100 p-4')}>
      <Text
        style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Credit Management Test
      </Text>

      {/* Card de Información de Centrales de Riesgo */}
      <View style={styles.card}>
        <Text style={className('text-lg font-semibold mb-2')}>
          Risk Center Information
        </Text>
        <Button
          title="View Details"
          color="#1E90FF"
          onPress={() => navigation.navigate('RiskCenterDetails')}
        />
      </View>

      {/* Datos Generales */}
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('GeneralData')}>
          <Text style={className('text-lg font-semibold mb-2')}>
            General Data
          </Text>
        </TouchableHighlight>
      </View>

      {/* Solicitud */}
      <View style={styles.card}>
        <TouchableHighlight
          onPress={() => navigation.navigate('RequestDetails')}>
          <Text style={className('text-lg font-semibold mb-2')}>Request</Text>
        </TouchableHighlight>
      </View>

      {/* Avales Garantías */}
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('AddGuarantee')}>
          <Text style={className('text-lg font-semibold mb-2')}>
            Guarantees
          </Text>
        </TouchableHighlight>
      </View>

      {/* Evaluación Financiera */}
      <View style={styles.card}>
        <TouchableHighlight
          onPress={() => navigation.navigate('FinancialEvaluation')}>
          <Text style={className('text-lg font-semibold mb-2')}>
            Financial Evaluation
          </Text>
        </TouchableHighlight>
      </View>

      {/* Referencias */}
      <View style={styles.card}>
        <TouchableHighlight onPress={() => navigation.navigate('AddReference')}>
          <Text style={className('text-lg font-semibold mb-2')}>
            References
          </Text>
        </TouchableHighlight>
      </View>

      {/* Fotos del Negocio */}
      <View style={styles.card}>
        <TouchableHighlight
          onPress={() => navigation.navigate('BusinessPhotos')}>
          <Text style={className('text-lg font-semibold mb-2')}>
            Business Photos
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    ...className('bg-white p-2 mb-2 rounded-lg'),
  },
});
