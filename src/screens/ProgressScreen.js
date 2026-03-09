import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function ProgressScreen() {

  const data = {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        data: [300, 450, 380, 520, 610, 480, 700]
      }
    ]
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Your Progress</Text>

      {/* Stats Cards */}

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardValue}>1250</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Steps</Text>
          <Text style={styles.cardValue}>8420</Text>
        </View>
      </View>

      <View style={styles.cardLarge}>
        <Text style={styles.cardTitle}>Workout Time</Text>
        <Text style={styles.cardValue}>2h 30m</Text>
      </View>

      {/* Chart */}

      <Text style={styles.chartTitle}>Weekly Calories Burn</Text>

      <LineChart
        data={data}
        width={screenWidth - 30}
        height={220}
        yAxisSuffix="kcal"
        chartConfig={{
          backgroundGradientFrom: "#1e293b",
          backgroundGradientTo: "#1e293b",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(34,197,94, ${opacity})`,
          labelColor: () => "#94a3b8"
        }}
        style={styles.chart}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#0f172a",
    padding:15
  },

  header:{
    fontSize:26,
    color:"#fff",
    fontWeight:"bold",
    marginBottom:20
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15
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
    borderRadius:12,
    marginBottom:20
  },

  cardTitle:{
    color:"#94a3b8"
  },

  cardValue:{
    color:"#fff",
    fontSize:22,
    fontWeight:"bold",
    marginTop:5
  },

  chartTitle:{
    color:"#fff",
    fontSize:18,
    marginBottom:10
  },

  chart:{
    borderRadius:12
  }

});