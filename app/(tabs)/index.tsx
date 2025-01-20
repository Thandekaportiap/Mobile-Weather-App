import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Inputs from '../../components/Inputs';
import TimeAndLocation from '../../components/TimeAndLocation';
import Temp from '../../components/Temp';
import Forecast from '../../components/Forecast';
import getFormattedWeatherData from '../services/weather';
import * as Location from 'expo-location'; // Location API

export default function App() {
  const [query, setQuery] = useState({ q: 'pietermaritzburg' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);

  const getWeather = async () => {
    const data = await getFormattedWeatherData({ ...query, units });
    setWeather(data);
  };

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationPermission(status === 'granted');
  };

  const handleLocationClick = async () => {
    if (locationPermission) {
      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;
      setQuery({ lat: latitude, lon: longitude });
      await getWeather();
    }
  };

  useEffect(() => {
    getWeather();
    getLocationPermission();
  }, [query, units]);

  return (
    <GestureHandlerRootView style={styles.container} >
      <ScrollView contentContainerStyle={styles.scrollView}>
        
          <Inputs setQuery={setQuery} setUnits={setUnits} />
          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <Temp weather={weather} />
              <Forecast title="3-hour step forecast" data={weather.hourly} />
              <Forecast title="Daily forecast" data={weather.daily} />
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                  Coded By Thandeka Portia P Mazibuko
                </Text>
              </View>
            </>
          )}
    
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
 
  scrollView: {
    paddingHorizontal: 1,
    paddingVertical: 2,
  },
  container: {
    borderRadius: 15,
    padding: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  footerContainer: {
    marginTop: 2,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#3b5998',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});
