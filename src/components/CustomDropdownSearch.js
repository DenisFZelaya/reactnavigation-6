import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, Button } from 'react-native';
import { className } from '../utils/className';

const CustomDropdownSearch = ({ options, selectedValue, onValueChange, title = "" }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleClose = () => {
    setModalVisible(false);
    setSearchQuery('');
  };

  const handleSelect = (value) => {
    onValueChange(value);
    setModalVisible(false);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilteredOptions(options.filter(option => option.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredOptions(options);
    }
  };

  const getSelectedName = () => {
    const selectedOption = options.find(option => option.value === selectedValue);
    return selectedOption ? selectedOption.name : 'Select an option';
  };

  return (
    <View style={className('m-0')}>
      <TouchableOpacity
        style={className('bg-purple-50 p-3 rounded')}
        onPress={() => setModalVisible(true)}
      >
        <Text style={className('')}>{getSelectedName()}</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={className('flex-1 justify-center bg-black bg-opacity-50')}>
          <View style={className('bg-white m-5 rounded p-5')}>
          <Text style={className('text-lg font-semibold mb-2')}>{title}</Text>
            <TextInput
              style={className('border border-gray-300 p-2 rounded mb-4')}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <FlatList
              data={filteredOptions}
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

export default CustomDropdownSearch;