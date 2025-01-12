import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <View style={styles.inputContainer}>
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
        <Text style={styles.unitButton}>°C</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUnits('imperial')}>
        <Text style={styles.unitButton}>°F</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
  },
  unitButton: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default Inputs;
