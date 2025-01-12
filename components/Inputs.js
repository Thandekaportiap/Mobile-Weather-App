import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <View className=' flex flex-row items-center justify-center space-x-10 text-sm py-3 my-3'>
      <TextInput
        value={city}
        onChangeText={setCity}
        placeholder="Search by city..."
        style={styles.input}
        
      />
      <TouchableOpacity onPress={handleSearchClick}>
        <Ionicons name="search" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUnits('metric')}>
        <Text className='text-2xl font-semibold text-white'>°C</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUnits('imperial')}>
        <Text className='text-2xl font-semibold text-white'>°F</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 10,
        marginRight: 10,
      },
});
 

export default Inputs;
