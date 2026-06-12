import React from 'react';
import { View, Text, Button } from 'react-native';
import { startAutomation } from '../services/api';

export default function DashboardScreen({ navigation }) {
  const handleStart = async () => {
    await startAutomation();
    alert('Automation started!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>FeedFlow Dashboard</Text>
      <Text style={{ marginVertical: 10 }}>Monitor your personalization progress.</Text>
      <Button title="Start Automation" onPress={handleStart} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}
