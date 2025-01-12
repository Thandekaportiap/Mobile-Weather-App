import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formattedLocalTime}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{`${name}, ${country}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    color: "white"
  },
  timeContainer: {
    marginBottom: 12,
    color: "white"
  },
  timeText: {
    fontSize: 18,
    fontWeight: '300', // Extra light font weight
    color: "white"
  },
  locationContainer: {
    marginBottom: 6,
    color: "white"
  },
  locationText: {
    fontSize: 24,
    fontWeight: '500', // Medium font weight
    color: "white"
  },
});

export default TimeAndLocation;
