import { View, Text, Switch, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [isMetric, setIsMetric] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.card}>
        {/* Temperature Unit Setting */}
        <View style={styles.settingRow}>
          <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Use Celsius</Text>
          <Switch
            value={isMetric}
            onValueChange={setIsMetric}
            trackColor={{ false: '#b0b0b0', true: '#4c669f' }}
            thumbColor={isMetric ? '#3b5998' : '#b0b0b0'}
          />
        </View>

        {/* Dark Mode Setting */}
        <View style={styles.settingRow}>
          <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: '#b0b0b0', true: '#4c669f' }}
            thumbColor={isDarkMode ? '#3b5998' : '#b0b0b0'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    justifyContent: 'center',
  },
  darkContainer: {
    backgroundColor: '#1c1c1c',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    color: '#42215a',
  },
  darkText: {
    color: '#d3d3d3',
  },
});
