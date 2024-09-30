import {View, Text, TextInput} from 'react-native';
import React from 'react';
import CustomDropdown from './CustomDropdown';
import CustomDropdownSearch from './CustomDropdownSearch';
import {className} from '../utils/className';

export default function CustomField({field, handleChange, values}) {
  return (
    <View style={className('mb-4')}>
      <Text style={className('font-semibold mb-2')}>{field.label}</Text>

      {field.component === 'TextField' && (
        <TextInput
          mode="outlined"
          style={className(' bg-purple-50 p-2 rounded')}
          placeholder={field.placeholder}
          onChangeText={handleChange(field.name)}
          value={values[field.name]}
        />
      )}
      {field.component === 'CustomDropdown' && (
        <CustomDropdown
          options={field.options}
          title={field?.label}
          selectedValue={values[field.name]}
          onValueChange={handleChange(field.name)}
        />
      )}
      {field.component === 'CustomDropdownSearch' && (
        <CustomDropdownSearch
          title={field?.label}
          options={field.options}
          selectedValue={values[field.name]}
          onValueChange={handleChange(field.name)}
        />
      )}
      {field.component === 'Date' && (
        <TextInput
          style={className('bg-purple-50 p-2 rounded')}
          placeholder={field.placeholder}
          onChangeText={handleChange(field.name)}
          value={values[field.name]}
        />
      )}
    </View>
  );
}
