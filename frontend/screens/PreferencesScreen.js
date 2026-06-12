import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { savePreferences } from '../services/api';

const topics = ['Technology', 'AI', 'Fitness', 'Travel', 'Education', 'Gaming'];

export default function PreferencesScreen({ navigation }) {
  const [selected, setSelected] = useState([]);

  const toggleTopic = (topic) => {
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleSave = async () => {
    await savePreferences(selected);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Select your interests</Text>
      <FlatList
        data={topics}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTopic(item)}>
            <Text style={{
              padding: 10,
              backgroundColor: selected.includes(item) ? '#4CAF50' : '#ddd',
              marginVertical: 5,
              borderRadius: 5
            }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Save Preferences" onPress={handleSave} />
    </View>
  );
}
