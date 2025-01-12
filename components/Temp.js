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
    <>
      <View className="flex justify-center items-center py-6 text-xl text-white">
        <Text className="text-2xl font-semibold text-white">{details}</Text>
      </View>
      <View className="flex flex-row items-center justify-between py-3">
        <Image source={{ uri: icon }}  className="w-20"/>
        <Text className="text-5xl font-extrabold text-white">{`${temp.toFixed()}°`}</Text>

        <View className="flex flex-col space-y-3 items-start mt-3">
          {verticalDetails.map(({ id, Icon, iconName, title, value }) => (
            <View key={id} className="flex font-light text-sm items-center justify-center">
              <Icon name={iconName} size={30} color={"white"}  className="mr-1" />
              <Text className='text-white'>
                {`${title}:`} {value}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View className="flex flex-row items-center justify-center space-x-10 text-sm py-3 mt-3 text-white">
        {horizontalDetails.map(({ id, Icon, iconName, title, value }) => (
          <View key={id} className="flex flex-col items-center justify-center">
            <Icon name={iconName} color={"white"} size={30} />
            <Text className="font-light m-1 text-white">
              {`${title}:`} {value}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default Temp;
