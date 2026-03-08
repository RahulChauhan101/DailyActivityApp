import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function WorkoutScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Workout</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Full Body Workout</Text>
        <Text style={styles.info}>Duration: 30 min</Text>
        <Text style={styles.info}>Calories: 200 kcal</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Cardio Training</Text>
        <Text style={styles.info}>Duration: 25 min</Text>
        <Text style={styles.info}>Calories: 180 kcal</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Yoga Stretch</Text>
        <Text style={styles.info}>Duration: 20 min</Text>
        <Text style={styles.info}>Calories: 120 kcal</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Abs Workout</Text>
        <Text style={styles.info}>Duration: 15 min</Text>
        <Text style={styles.info}>Calories: 100 kcal</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#0f172a",
    padding:20
  },

  header:{
    fontSize:26,
    color:"#fff",
    fontWeight:"bold",
    marginBottom:20
  },

  card:{
    backgroundColor:"#1e293b",
    padding:20,
    borderRadius:12,
    marginBottom:15
  },

  title:{
    fontSize:18,
    color:"#fff",
    fontWeight:"bold",
    marginBottom:5
  },

  info:{
    color:"#94a3b8"
  }

});