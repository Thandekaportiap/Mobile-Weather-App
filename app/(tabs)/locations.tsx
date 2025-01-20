import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LocationsScreen() {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');

  // Load saved locations from AsyncStorage
  useEffect(() => {
    const loadLocations = async () => {
      try {
        const savedLocations = await AsyncStorage.getItem('locations');
        if (savedLocations) {
          setLocations(JSON.parse(savedLocations));
        }
      } catch (error) {
        console.error('Error loading locations:', error);
      }
    };

    loadLocations();
  }, []);

  // Save locations to AsyncStorage
  const saveLocations = async (updatedLocations) => {
    try {
      await AsyncStorage.setItem('locations', JSON.stringify(updatedLocations));
    } catch (error) {
      console.error('Error saving locations:', error);
    }
  };

  // Add a new location
  const addLocation = () => {
    if (!newLocation.trim()) {
      Alert.alert('Error', 'Please enter a location name.');
      return;
    }

    const updatedLocations = [...locations, newLocation.trim()];
    setLocations(updatedLocations);
    saveLocations(updatedLocations);
    setNewLocation('');
  };

  // Remove a location
  const removeLocation = (location) => {
    Alert.alert(
      'Remove Location',
      `Are you sure you want to remove "${location}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            const updatedLocations = locations.filter((loc) => loc !== location);
            setLocations(updatedLocations);
            saveLocations(updatedLocations);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Locations</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a location"
          value={newLocation}
          onChangeText={setNewLocation}
        />
        <TouchableOpacity style={styles.addButton} onPress={addLocation}>
          <MaterialCommunityIcons name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.locationItem}>
            <Text style={styles.locationText}>{item}</Text>
            <TouchableOpacity onPress={() => removeLocation(item)}>
              <MaterialCommunityIcons name="delete" size={24} color="#ff5252" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No saved locations. Add some!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4c669f',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#4c669f',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  locationText: {
    fontSize: 16,
    color: '#4c669f',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#aaa',
    marginTop: 20,
  },
});
