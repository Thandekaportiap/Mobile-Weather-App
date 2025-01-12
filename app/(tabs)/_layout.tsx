import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#74478c',
      tabBarInactiveTintColor: '#42215a',
      tabBarStyle: {
        backgroundColor: '#ffffff',
      },
    }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Weather',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="weather-partly-cloudy" size={24} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="locations"
      options={{
        title: 'Locations',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map-marker-multiple" size={24} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarShowLabel: false,
        title: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" size={24} color={color} />
        ),
      }}
    />
  </Tabs>
  );
}
