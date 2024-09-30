import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GeneralSection from './Sections/GeneralSection/GeneralSection';
import DirectionsSection from './Sections/DirectionsSection/DirectionsSection';
import LaboralSection from './Sections/LaboralSection/LaboralSection';
import AdditionalSection from './Sections/AdditionalSection/AdditionalSection';
import ImagesSection from './Sections/ImagesSection/ImagesSection';

const Tab = createBottomTabNavigator();

const GeneralDataPageNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="general" component={GeneralSection} />
      <Tab.Screen name="direction" component={DirectionsSection} />
      <Tab.Screen name="laboral" component={LaboralSection} />
      <Tab.Screen name="additional" component={AdditionalSection} />
      <Tab.Screen name="imgs" component={ImagesSection} />
    </Tab.Navigator>
  );
};

export default GeneralDataPageNav;