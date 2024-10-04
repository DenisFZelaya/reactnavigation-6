import { View, Text, StyleSheet, ScrollView, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { className } from '../../../../../utils/className';

export default function CreditManagement({ navigation }) {
  return (
    <ScrollView style={className('h-full bg-gray-100 p-4')}>
      <Text
        style={className('text-2xl font-bold text-center mb-4 text-blue-600')}>
        Gestión de Crédito
      </Text>

      <View style={className('bg-white border border-green-200 mb-2 rounded-lg p-3')}>
        <Text style={className('font-semibold mb-2')}>
          Cliente: Denis Federico Zelaya Zelaya
        </Text>
      </View>

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

      <View style={className('flex flex-wrap flex-row items-center')}>

        {/* Datos Generales */}
        <View style={className('w-1/2')}>
          <View style={className('bg-indigo-200 p-2 mb-2 rounded-lg mr-2 items-center')}>
            <TouchableOpacity onPress={() => navigation.navigate('GeneralData')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/2503/2503707.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Datos Generales
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Solicitud */}
        <View style={className('w-1/2')}>
          <View style={className('bg-green-200 p-2 mb-2 rounded-lg mr-2 items-center')}>
            <TouchableOpacity onPress={() => navigation.navigate('RequestDetails')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/6008/6008154.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Solicitud
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Avales Garantías */}
        <View style={className('w-1/2')}>
          <View style={className('bg-yellow-200 p-2 mb-2 rounded-lg mr-2')}>
            <TouchableOpacity onPress={() => navigation.navigate('AddGuarantee')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/4514/4514936.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Garantias
                </Text>
                <View style={className('flex flex-wrap flex-row')}>
                  <View style={className('bg-green-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                  <View style={className('bg-gray-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                  <View style={className('bg-green-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        
        {/* Referencias */}
        <View style={className('w-1/2')}>
          <View style={className('bg-blue-200 p-2 mb-2 rounded-lg mr-2')}>
            <TouchableOpacity onPress={() => navigation.navigate('AddReference')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/7612/7612959.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Referencias Personales
                </Text>
                <View style={className('flex flex-wrap flex-row')}>
                  <View style={className('bg-green-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                  <View style={className('bg-gray-300 w-3 h-3 rounded-full mr-1 shadow-lg')}></View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        {/* Evaluación Financiera */}
        <View style={className('w-1/2')}>
          <View style={className('bg-pink-200 p-2 mb-2 rounded-lg mr-2')}>
            <TouchableOpacity onPress={() => navigation.navigate('FinancialEvaluation')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/6020/6020452.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Evaluacion Financiera
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        {/* Fotos del Negocio */}
        <View style={className('w-1/2')}>
          <View style={className('bg-purple-200 p-2 mb-2 rounded-lg mr-2')}>
            <TouchableOpacity onPress={() => navigation.navigate('BusinessPhotos')}>
              <View style={className(`items-center`)}>
                <Image
                  source={{ uri: "https://freeiconshop.com/wp-content/uploads/edd/image-flat.png" }}
                  resizeMode='center'
                  style={className(`w-20 h-20 mb-2`)}
                />
                <Text style={className(' font-semibold mb-2')}>
                  Fotos del Negocio
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    ...className('bg-white p-2 mb-2 rounded-lg'),
  },
});
