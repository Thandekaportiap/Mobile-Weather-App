import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, View, Image, StyleSheet } from 'react-native';
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
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: Ionicons,
      iconName: 'water',
      title: 'Humidity',
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: Ionicons,
      iconName: 'md-wind',
      title: 'Wind',
      value: `${speed.toFixed()} km/h`,
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
    <>
      <View className="flex justify-center items-center py-6 text-xl text-gray-950">
        <Text className="text-2xl font-semibold">{details}</Text>
      </View>
      <View className="flex flex-row items-center justify-between py-3">
        {/* <img src={icon} alt="weather icon" className="w-20" /> */}
        <Text className="text-5xl">{`${temp.toFixed()}°`}</Text>

        <View className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, iconName, title, value }) => (
            <View key={id} className="flex font-light text-sm items-center justify-center">
              <Icon name={iconName} size={20} className="mr-1" />
              <Text>
                {`${title}:`} {value}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {horizontalDetails.map(({ id, Icon, iconName, title, value }) => (
          <View key={id} className="flex flex-row items-center justify-center">
            <Icon name={iconName} size={30} />
            <Text className="font-light ml-1">
              {`${title}:`} {value}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default Temp;
