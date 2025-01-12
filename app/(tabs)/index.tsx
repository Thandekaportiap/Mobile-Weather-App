import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Inputs from '../../components/Inputs';
import TimeAndLocation from '../../components/TimeAndLocation';
import Temp from '../../components/Temp';
import Forecast from '../../components/Forecast';
import getFormattedWeatherData from '../services/weather';
import * as Location from 'expo-location'; // Location API

// Assets (Make sure you have these images or other assets)
// import defaultBackground from '../../assets/defaultBackground.jpg'; // Example, adjust as needed
// import coldBackground from '../../assets/coldBackground.jpg'; // Example, adjust as needed
// import warmBackground from '../../assets/warmBackground.jpg'; // Example, adjust as needed

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
    const { status } = await Location.requestForegroundPermissionsAsync(); // Corrected to request foreground permission
    setLocationPermission(status === 'granted');
  };

  const handleLocationClick = async () => {
    if (locationPermission) {
      const { coords } = await Location.getCurrentPositionAsync(); // Use expo-location API here
      const { latitude, longitude } = coords;
      setQuery({ lat: latitude, lon: longitude });
      await getWeather();
    }
  };

  useEffect(() => {
    getWeather();
    getLocationPermission();
  }, [query, units]);

  // const getBackgroundImage = () => {
  //   if (!weather) return defaultBackground;

  //   const threshold = units === 'metric' ? 20 : 60;
  //   if (weather.temp <= threshold) return coldBackground;
  //   return warmBackground;
  // };

  return (
    <GestureHandlerRootView className='flex bg-[#42215a] text-white'> 
      <ScrollView >
      <View >
        <ImageBackground
          // source={getBackgroundImage()} // Use dynamic background
          
          resizeMode="cover"
        >
          <Inputs setQuery={setQuery} setUnits={setUnits} />
          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <Temp weather={weather} />
              <Forecast title="3 hour step forecast" data={weather.hourly} />
              <Forecast title="daily forecast" data={weather.daily} />
              <View >
                <Text >Coded By Thandeka Portia P Mazibuko</Text>
              </View>
            </>
          )}
        </ImageBackground>
      </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
}

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerContainer: {
//     padding: 20,
//     marginTop: 20,
//   },
//   footerText: {
//     fontSize: 16,
//     color: '#fff',
//     textAlign: 'center',
//   },
// });
