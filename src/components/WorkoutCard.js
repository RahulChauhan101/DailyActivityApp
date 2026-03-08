import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkoutCard({ name, duration }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.duration}>{duration} mins</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  name: { fontSize: 16, fontWeight: '600' },
  duration: { fontSize: 14, color: '#666' },
});