import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Forecast = ({ title, data }) => {
  return (
    <View style={styles.forecastContainer}>
      <Text style={styles.forecastTitle}>{title}</Text>
      <View style={styles.forecastItems}>
        {data.map((d, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text style={styles.forecastTime}>{d.title}</Text>
            <Image source={{ uri: d.icon }} style={styles.forecastIcon} />
            <Text style={styles.forecastTemp}>{`${d.temp.toFixed()}°`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    marginTop: 20,
  },
  forecastTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  forecastItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  forecastItem: {
    alignItems: 'center',
  },
  forecastTime: {
    fontSize: 16,
  },
  forecastIcon: {
    width: 40,
    height: 40,
  },
  forecastTemp: {
    fontSize: 16,
  },
});

export default Forecast;
