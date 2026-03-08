import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Your Progress</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Weekly Steps</Text>
        <Text style={styles.value}>52,300</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Calories Burned</Text>
        <Text style={styles.value}>3,200 kcal</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Workout Time</Text>
        <Text style={styles.value}>4 hrs 20 min</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Active Days</Text>
        <Text style={styles.value}>5 / 7 Days</Text>
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
    color:"#94a3b8",
    fontSize:16
  },

  value:{
    color:"#fff",
    fontSize:22,
    fontWeight:"bold",
    marginTop:5
  }

});