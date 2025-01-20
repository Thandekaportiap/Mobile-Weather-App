import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.gradient}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#b0c4de',
          tabBarStyle: {
            backgroundColor: 'transparent', // Make it transparent to show the gradient
            borderTopWidth: 0, // Remove the border
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Weather',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="weather-partly-cloudy"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="locations"
          options={{
            title: 'Locations',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="map-marker-multiple"
                size={24}
                color={color}
              />
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
