import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Button } from 'react-native';
import { className } from '../utils/className';

const CustomDropdown = ({ options, selectedValue, onValueChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSelect = (value) => {
    onValueChange(value);
    setModalVisible(false);
  };

  const getSelectedName = () => {
    const selectedOption = options.find(option => option.value === selectedValue);
    return selectedOption ? selectedOption.name : 'Select an option';
  };

  return (
    <View style={className('m-0')}>
      <TouchableOpacity
        style={className('border border-gray-300 p-3 rounded')}
        onPress={() => setModalVisible(true)}
      >
        <Text style={className('text-lg')}>{getSelectedName()}</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={className('flex-1 justify-center bg-black bg-opacity-50')}>
          <View style={className('bg-white m-5 rounded p-5')}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={className('p-3 bg-gray-100 rounded-lg mb-2')}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={className('text-lg')}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <Button title='Cerrar' onPress={handleClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default CustomDropdown;