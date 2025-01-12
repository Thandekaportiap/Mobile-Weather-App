import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Forecast = ({ title, data }) => {
  return (
    <View style={styles.forecastContainer}>
      <Text style={styles.forecastTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-3"
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
      <View style={styles.forecastItems}>
        {data.map((d, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text style={styles.forecastTime}>{d.title}</Text>
            <Image source={{ uri: d.icon }} style={styles.forecastIcon} />
            <Text style={styles.forecastTemp}>{`${d.temp.toFixed()}°`}</Text>
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    marginTop: 20,
    backgroundColor: '#74478c',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  forecastTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white"
  },
  forecastItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    color: "white"
  },
  forecastItem: {
    alignItems: 'center',
  },
  forecastTime: {
    fontSize: 16,
    color: "white"
  },
  forecastIcon: {
    width: 40,
    height: 40,
  },
  forecastTemp: {
    fontSize: 16,
        color: "white"
  },
});

export default Forecast;
