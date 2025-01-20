import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="Search by city..."
          style={styles.input}
          placeholderTextColor="#7d7d7d"
        />
        <TouchableOpacity onPress={handleSearchClick} style={styles.iconButton}>
          <Ionicons name="search" size={30} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnits('metric')} style={styles.unitButton}>
          <Text style={styles.unitText}>°C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnits('imperial')} style={styles.unitButton}>
          <Text style={styles.unitText}>°F</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginRight: 10,
  },
  iconButton: {
    padding: 5,
    borderRadius: 10,
  },
  unitButton: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  unitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Inputs;
