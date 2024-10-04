import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Button } from 'react-native';
import { className } from '../utils/className';

const CustomDropdown = ({ options, selectedValue, onValueChange, title = "" }) => {
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
    return selectedOption ? selectedOption.name : title;
  };

  return (
    <View style={className('m-0 mb-1')}>
      <TouchableOpacity
        style={className(' ')}
        onPress={() => setModalVisible(true)}
      >
        <View style={className('bg-purple-50 p-3 rounded flex flex-row justify-between items-center w-full')}>
          <Text style={className('')}>{getSelectedName()}</Text>

          <Text style={className('text-green-500')}>🔽</Text>
        </View>
      </TouchableOpacity>


      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={className('flex-1 justify-center bg-black bg-opacity-50')}>
          <View style={className('bg-white m-5 rounded p-5')}>
    
            <View style={className('flex flex-row justify-between items-center mb-2')}>
              <Text style={className('text-lg font-semibold mb-2')}>{title}</Text>
              <TouchableOpacity
                style={className(' p-2 rounded bg-red-200 rounded-full shadow-xl')}
                onPress={() => setModalVisible(false)}
              >
                <Text style={className('font-bold text-red-500')}>❌</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={className('p-3 bg-gray-100 rounded-lg mb-2 flex flex-row justify-start items-center')}
                  onPress={() => handleSelect(item.value)}
                >
                  {selectedValue === item.value && <View style={className('bg-green-300 w-5 h-5 rounded-full mr-2 shadow-xl')}></View>}
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