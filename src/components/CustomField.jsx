import { View, Text, TextInput, Switch } from 'react-native';
import React from 'react';
import CustomDropdown from './CustomDropdown';
import CustomDropdownSearch from './CustomDropdownSearch';
import { className } from '../utils/className';

export default function CustomField({ field, handleChange, values, columns = 1 }) {

  const getWidthClass = () => {
    switch(field.columns) {
      case 1: return 'w-1/4 pl-1 pr-1';
      case 2: return 'w-2/4 pl-1 pr-1';
      case 3: return 'w-3/4 pl-1 pr-1';
      case 4: return 'w-full pl-1 pr-1';
      default: return 'w-full pl-1 pr-1';
    }
  };

  const widthClass = getWidthClass();


  return (
    <View style={className(`mb-2 ${widthClass}`)}>
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

      {field.component === 'Switch' && (
        <View style={className('bg-purple-50 flex flex-row justify-between items-center p-2 rounded')}>
          <Text>{field.label}</Text>
          <Switch
            onValueChange={(value) => {
              console.log("Value switch: ", value);
              handleChange(field.name)(value);
            }}
            //value={values[field.name] || false}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={values[field.name] ? "#f5dd4b" : "#f4f3f4"}
            //value={Boolean(values[field.name]) || false }
          />
        </View>

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
