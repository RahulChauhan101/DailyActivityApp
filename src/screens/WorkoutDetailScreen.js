import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function WorkoutDetailScreen() {

  const exercises = [
    { name: "Push Ups", reps: "3 sets × 15 reps" },
    { name: "Squats", reps: "3 sets × 20 reps" },
    { name: "Plank", reps: "3 sets × 30 sec" },
    { name: "Jumping Jacks", reps: "3 sets × 25 reps" }
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Full Body Workout</Text>

      {exercises.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.exercise}>{item.name}</Text>
          <Text style={styles.reps}>{item.reps}</Text>
        </View>
      ))}

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
    color:"#fff",
    fontSize:26,
    fontWeight:"bold",
    marginBottom:20
  },

  card:{
    backgroundColor:"#1e293b",
    padding:20,
    borderRadius:12,
    marginBottom:15
  },

  exercise:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  },

  reps:{
    color:"#94a3b8",
    marginTop:5
  }

});