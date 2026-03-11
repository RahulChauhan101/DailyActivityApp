import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}> My Daily Activity</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.text}>Home Screen</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#0f172a"
  },

  header:{
    flexDirection:"row",
    alignItems:"center",
    padding:20,
    backgroundColor:"#020617"
  },

  headerTitle:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold",
    marginLeft:15
  },

  content:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  text:{
    color:"#fff",
    fontSize:18
  }

});