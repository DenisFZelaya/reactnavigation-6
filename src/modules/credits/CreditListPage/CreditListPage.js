import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { className } from '../../../utils/className';

const items = [
    { name: "Denis Federico Zeaya Zeaya" },
    { name: "Genesis Maitee Zeaya Zeaya" },
    { name: "Sandra Melisa Zeaya Zeaya" },
    { name: "Ireene Zeaya Zeaya" },
]

/**
 * CreditListPage - Página principal para la gestión de créditos.
 * @param {object} navigation - Objeto de navegación para cambiar de pantallas.
 */
export default function CreditListPage({ navigation }) {
    return (
        <ScrollView style={className('h-full bg-gray-100 p-4')}>
            <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
                Credit Management Test
            </Text>

            {
                items?.map((item, i) => {
                    return (
                        <TouchableHighlight>
                            <View style={className('flex bg-white p-4 mb-2 rounded-md shadow-sm')}>
                                <Text style={className('font-bold')}>
                                    {item?.name}
                                </Text>
                                <Text style={className('text-gray-400')}>
                                    Monto: L. 200,000.00
                                </Text>
                            </View>
                        </TouchableHighlight>
                    )
                })
            }

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
                <TouchableHighlight
                    onPress={() => navigation.navigate('GeneralData')}
                >
                    <Text style={className('text-lg font-semibold mb-2')}>General Data</Text>
                </TouchableHighlight>
            </View>

            {/* Solicitud */}
            <View style={styles.card}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('RequestDetails')}
                >
                    <Text style={className('text-lg font-semibold mb-2')}>Request</Text>
                </TouchableHighlight>
            </View>

            {/* Avales Garantías */}
            <View style={styles.card}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('AddGuarantee')}
                >
                    <Text style={className('text-lg font-semibold mb-2')}>Guarantees</Text>
                </TouchableHighlight>
            </View>


            {/* Evaluación Financiera */}
            <View style={styles.card}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('FinancialEvaluation')}
                >
                    <Text style={className('text-lg font-semibold mb-2')}>Financial Evaluation</Text>
                </TouchableHighlight>
            </View>




            {/* Referencias */}
            <View style={styles.card}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('AddReference')}
                >
                    <Text style={className('text-lg font-semibold mb-2')}>References</Text>
                </TouchableHighlight>
            </View>

            {/* Fotos del Negocio */}
            <View style={styles.card}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('BusinessPhotos')}
                >
                    <Text style={className('text-lg font-semibold mb-2')}>Business Photos</Text>
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