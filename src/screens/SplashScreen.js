import React, {useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";

export default function SplashScreen({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Activity App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0f172a"
  },
  title:{
    color:"#fff",
    fontSize:28,
    fontWeight:"bold"
  }
});