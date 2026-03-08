import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as Progress from "react-native-progress";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Daily Activity</Text>

      <View style={styles.progressContainer}>
        <Progress.Circle
          size={150}
          progress={0.7}
          showsText={true}
          color="#22c55e"
          thickness={10}
          formatText={() => "70%"}
        />
        <Text style={styles.progressLabel}>Today's Goal</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Steps</Text>
          <Text style={styles.cardValue}>7,820</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardValue}>650 kcal</Text>
        </View>
      </View>

      <View style={styles.cardLarge}>
        <Text style={styles.cardTitle}>Workout Time</Text>
        <Text style={styles.cardValue}>45 min</Text>
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

  progressContainer:{
    alignItems:"center",
    marginBottom:30
  },

  progressLabel:{
    color:"#94a3b8",
    marginTop:10
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:20
  },

  card:{
    backgroundColor:"#1e293b",
    padding:20,
    borderRadius:12,
    width:"48%"
  },

  cardLarge:{
    backgroundColor:"#1e293b",
    padding:20,
    borderRadius:12
  },

  cardTitle:{
    color:"#94a3b8"
  },

  cardValue:{
    color:"#fff",
    fontSize:22,
    fontWeight:"bold",
    marginTop:5
  }

});