import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import { className } from '../utils/className';

const CustomDropdownSearch = ({ options, selectedValue, onValueChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

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
    <View style={className('m-5')}>
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
                  style={className('p-3')}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={className('text-lg')}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDropdownSearch;