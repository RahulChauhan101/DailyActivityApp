import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function WorkoutScreen({ navigation }) {

  const workouts = [
    { name: "Push Ups", reps: "3 × 15 reps" },
    { name: "Squats", reps: "3 × 20 reps" },
    { name: "Plank", reps: "3 × 30 sec" },
    { name: "Jumping Jacks", reps: "3 × 25 reps" }
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Today's Workout</Text>

      {workouts.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.exercise}>{item.name}</Text>
          <Text style={styles.reps}>{item.reps}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("WorkoutTimer")}
      >
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>

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
  },

  button:{
    backgroundColor:"#22c55e",
    padding:18,
    borderRadius:12,
    alignItems:"center",
    marginTop:20
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold"
  }

});