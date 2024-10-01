import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreditListPage from '../../CreditListPage/Pages/CreditListPage';
import RiskCenterDetailsPage from '../Pages/RiskCenterDetailsPage/RiskCenterDetailsPage';
import GeneralDataPage from '../Pages/GeneralDataPage/GeneralDataPageNav';
import RequestDetailsPage from '../Pages/RequestDetailsPage/RequestDetailsPage';
import GuaranteesPage from '../Pages/GuaranteesPage/GuaranteesPage';
import FinancialEvaluationPage from '../Pages/FinancialEvaluationPage/FinancialEvaluationPage';
import PersonalReferencesPage from '../Pages/PersonalReferencesPage/PersonalReferencesPage';
import BusinessPhotosPage from '../Pages/BusinessPhotosPage/BusinessPhotosPage';
import CreditManagement from '../Pages/CreditManagement/CreditManagement';

const Stack = createNativeStackNavigator();

function StackNavCreditManagement(): JSX.Element {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ animation: "slide_from_right" }}>
            <Stack.Screen name="Home" component={CreditManagement} />
            <Stack.Screen name="RiskCenterDetails" component={RiskCenterDetailsPage} />
            <Stack.Screen name="GeneralData" component={GeneralDataPage} />
            <Stack.Screen name="RequestDetails" component={RequestDetailsPage} />
            <Stack.Screen name="AddGuarantee" component={GuaranteesPage} />
            <Stack.Screen name="FinancialEvaluation" component={FinancialEvaluationPage} />
            <Stack.Screen name="AddReference" component={PersonalReferencesPage} />
            <Stack.Screen name="BusinessPhotos" component={BusinessPhotosPage} />
        </Stack.Navigator>
    )
}

function Home({ navigation }): JSX.Element {
    return (
        <ScrollView>
            <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Go to Notifications' onPress={() => navigation.navigate('Notifications')} />
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
            <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
        </ScrollView>
    )
}

export default StackNavCreditManagement;