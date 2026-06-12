import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Welcome to FeedFlow</Text>
      <Text style={{ marginVertical: 10 }}>Personalize your Instagram feed easily.</Text>
      <Button title="Connect Instagram" onPress={() => navigation.navigate('Preferences')} />
    </View>
  );
}
