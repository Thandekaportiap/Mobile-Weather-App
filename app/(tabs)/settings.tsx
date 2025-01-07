import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [isMetric, setIsMetric] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-white p-4">
      <View className="bg-gray-50 rounded-lg p-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-[#42215a] text-lg">Use Celsius</Text>
          <Switch
            value={isMetric}
            onValueChange={setIsMetric}
            trackColor={{ false: '#42215a', true: '#74478c' }}
          />
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-[#42215a] text-lg">Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: '#42215a', true: '#74478c' }}
          />
        </View>
      </View>
    </View>
  );
}