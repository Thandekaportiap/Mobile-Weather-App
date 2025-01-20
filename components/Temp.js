import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Temp = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FontAwesome,
      iconName: 'thermometer-empty',
      title: 'Real Feel',
      value: feels_like ? `${feels_like.toFixed()}°` : 'N/A',
    },
    {
      id: 2,
      Icon: Ionicons,
      iconName: 'water',
      title: 'Humidity',
      value: humidity ? `${humidity.toFixed()}%` : 'N/A',
    },
    {
      id: 3,
      Icon: Ionicons,
      iconName: 'cloudy',
      title: 'Wind',
      value: speed ? `${speed.toFixed()} km/h` : 'N/A',
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: MaterialCommunityIcons,
      iconName: 'weather-sunset-up',
      title: 'Sunrise',
      value: sunrise,
    },
    {
      id: 2,
      Icon: MaterialCommunityIcons,
      iconName: 'weather-sunset-down',
      title: 'Sunset',
      value: sunset,
    },
    {
      id: 3,
      Icon: MaterialCommunityIcons,
      iconName: 'arrow-up-bold',
      title: 'High',
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MaterialCommunityIcons,
      iconName: 'arrow-down-bold',
      title: 'Low',
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.centeredContainer}>
        <Text style={styles.detailsText}>{details}</Text>
      </View>

      <View style={styles.weatherContainer}>
        <View style={styles.tempContainer}>
          <Image 
            source={{ uri: icon }} 
            style={styles.weatherIcon} 
            resizeMode="contain"
          />
          <Text style={styles.tempText}>{`${temp.toFixed()}°`}</Text>
        </View>

        <View style={styles.verticalDetailsContainer}>
          {verticalDetails.map(({ id, Icon, iconName, title, value }) => (
            <View key={id} style={styles.verticalDetail}>
              <Icon name={iconName} size={24} color="white" style={styles.icon} />
              <Text style={styles.verticalText}>
                {`${title}: `}
                <Text style={styles.valueText}>{value}</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.horizontalDetailsContainer}>
        {horizontalDetails.map(({ id, Icon, iconName, title, value }) => (
          <View key={id} style={styles.horizontalDetail}>
            <Icon name={iconName} color="white" size={24} />
            <Text style={styles.horizontalTitle}>{title}</Text>
            <Text style={styles.horizontalValue}>{value}</Text>
          </View>
        ))}
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
  centeredContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  detailsText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 70,
    height: 70,
  },
  tempText: {
    fontSize: 52,
    fontWeight: '700',
    color: 'white',
    marginLeft: 10,
  },
  verticalDetailsContainer: {
    justifyContent: 'center',
  },
  verticalDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
    width: 24,
  },
  verticalText: {
    color: 'white',
    fontSize: 16,
  },
  valueText: {
    fontWeight: '500',
  },
  horizontalDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  horizontalDetail: {
    alignItems: 'center',
  },
  horizontalTitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
    opacity: 0.9,
  },
  horizontalValue: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
    marginTop: 2,
  },
});

export default Temp;