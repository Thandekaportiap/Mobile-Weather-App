import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.container}
        >
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formattedLocalTime}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{`${name}, ${country}`}</Text>
      </View>
    </View>
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
  timeContainer: {
    marginBottom: 12,
  },
  timeText: {
    fontSize: 18,
    fontWeight: '300', // Extra light font weight
    color: "white", // Ensure white text for visibility
  },
  locationContainer: {
    marginBottom: 6,
  },
  locationText: {
    fontSize: 24,
    fontWeight: '500', // Medium font weight
    color: "white", // Ensure white text for visibility
  },
});

export default TimeAndLocation;
