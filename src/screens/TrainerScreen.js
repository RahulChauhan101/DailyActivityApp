import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrainerScreen() {
  return (
    <View style={styles.container}>
      <Text>TrainerScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});