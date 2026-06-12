import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Settings</Text>
      <Button title="Edit Preferences" onPress={() => navigation.navigate('Preferences')} />
    </View>
  );
}
