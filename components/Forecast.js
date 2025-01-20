import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const Forecast = ({ title, data }) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
    
        <Text style={styles.forecastTitle}>{title}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.forecastItems}>
            {data.map((d, index) => (
              <View key={index} style={styles.forecastCard}>
                <Text style={styles.forecastTime}>{d.title}</Text>
                <Image source={{ uri: d.icon }} style={styles.forecastIcon} />
                <Text style={styles.forecastTemp}>{`${d.temp.toFixed()}°`}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  forecastContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  forecastTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  forecastItems: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  forecastCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  forecastTime: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  forecastIcon: {
    width: 45,
    height: 45,
    marginBottom: 5,
  },
  forecastTemp: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});

export default Forecast;
