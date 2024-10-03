import { View, Text, TextInput } from 'react-native';
import React from 'react';
import CustomDropdown from './CustomDropdown';
import CustomDropdownSearch from './CustomDropdownSearch';
import { className } from '../utils/className';

export default function CustomField({ field, handleChange, values }) {
  return (
    <View style={className('mb-2')}>
      {values[field.name] && <Text style={className('mb-0')}>{field.label}</Text>}

      {field.component === 'TextField' && (
        <TextInput
          mode="outlined"
          style={className(' bg-purple-50 p-2 rounded')}
          placeholder={field.placeholder}
          onChangeText={handleChange(field.name)}
          value={values[field.name]}
          {...field.customProps}
          inputMode='numeric'
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

      {field.component === 'Title' && (
        <View>
          <Text style={className('text-blue-600 text-lg font-bold')}>{field?.label}</Text>
          {
            field?.subLabel && (
              <Text style={className('text-sm')}>{field?.subLabel}</Text>
            )
          }
          <View style={className('w-full bg-gray-300 rounded-md')} ><Text style={{ height: 1 }}></Text></View>
        </View>
      )}

    </View>
  );
}
