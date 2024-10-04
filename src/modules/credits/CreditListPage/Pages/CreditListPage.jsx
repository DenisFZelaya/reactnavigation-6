import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {className} from '../../../../utils/className';

/**s
 * CreditListPage - Página principal para la gestión de créditos.
 * @param {object} navigation - Objeto de navegación para cambiar de pantallas.
 */
export default function CreditListPage({navigation}) {
  let items = [
    {name: 'Denis Federico Zeaya Zeaya'},
    {name: 'Genesis Maitee Zeaya Zeaya'},
    {name: 'Sandra Melisa Zeaya Zeaya'},
    {name: 'Ireene Zeaya Zeaya'},
  ];

  console.log('navigation: ', navigation);

  return (
    <ScrollView style={className('h-full bg-gray-100 p-4')}>
      
      <Text
        style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Listado de Créditos
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('CreditManagement')}>
        <View style={className('bg-white mb-2 p-2 rounded-lg')} v>
          <Text style={className('text-xl')}>Denis Zelaya</Text>
          <Text style={className('text-gray-400')}>Monto: L 200,000.00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CreditManagement')}>
        <View style={className('bg-white mb-2 p-2 rounded-lg')} v>
          <Text style={className('text-xl')}>Denis Zelaya Zeaya</Text>
          <Text style={className('text-gray-400')}>Monto: L 200,000.00</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    ...className('bg-white p-2 mb-2 rounded-lg'),
  },
});
