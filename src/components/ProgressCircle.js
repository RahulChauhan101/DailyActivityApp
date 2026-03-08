import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCircle({ progress }) {
  // This is a placeholder; replace with a real circular progress component
  return (
    <View style={styles.container}>
      <Text>{progress}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});