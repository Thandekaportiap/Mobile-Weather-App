import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function WeatherScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location);
        fetchWeatherData(location.coords);
      }
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const fetchWeatherData = async (coords) => {
    // Implement weather API call
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="p-4">
        {/* Current Weather */}
        <View className="bg-[#42215a] rounded-lg p-6 mb-4">
          <Text className="text-white text-2xl font-bold">Current Weather</Text>
          {weatherData && (
            <View className="mt-4">
              <Text className="text-white text-4xl">22°C</Text>
              <Text className="text-white mt-2">Humidity: 65%</Text>
              <Text className="text-white">Wind: 12 km/h</Text>
            </View>
          )}
        </View>

        {/* Hourly Forecast */}
        <Text className="text-[#42215a] text-xl font-bold mb-2">Hourly Forecast</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
          {/* Add hourly forecast items */}
        </ScrollView>

        {/* Daily Forecast */}
        <Text className="text-[#42215a] text-xl font-bold mb-2">7-Day Forecast</Text>
        <View className="bg-gray-50 rounded-lg p-4">
          {/* Add daily forecast items */}
        </View>
      </ScrollView>
    </View>
  );
}