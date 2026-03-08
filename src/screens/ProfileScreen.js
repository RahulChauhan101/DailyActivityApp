import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={{uri:"https://i.pravatar.cc/500"}}
        style={styles.avatar}
      />

      <Text style={styles.name}>Rahul Chauhan</Text>
      <Text style={styles.email}>rahul.chauhan01@gmail.com</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Height</Text>
        <Text style={styles.value}>175 cm</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Weight</Text>
        <Text style={styles.value}>72 kg</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Fitness Goal</Text>
        <Text style={styles.value}>Lose Fat</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#0f172a",
    paddingTop:40
  },

  avatar:{
    width:120,
    height:120,
    borderRadius:60,
    marginBottom:15
  },

  name:{
    color:"#fff",
    fontSize:22,
    fontWeight:"bold"
  },

  email:{
    color:"#94a3b8",
    marginBottom:20
  },

  card:{
    width:"90%",
    backgroundColor:"#1e293b",
    padding:18,
    borderRadius:12,
    marginBottom:10
  },

  label:{
    color:"#94a3b8"
  },

  value:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold",
    marginTop:4
  }

});