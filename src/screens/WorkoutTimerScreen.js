import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function WorkoutTimerScreen(){

  const [time,setTime] = useState(30);
  const [running,setRunning] = useState(false);
  const [calories,setCalories] = useState(0);

  useEffect(()=>{

    let timer;

    if(running && time > 0){

      timer = setInterval(()=>{

        setTime(prev => prev - 1);
        setCalories(prev => prev + 1);

      },1000);

    }

    if(time === 0){
      setRunning(false);
    }

    return ()=> clearInterval(timer);

  },[running,time]);

  return(

    <View style={styles.container}>

      <Text style={styles.title}>Workout Timer</Text>

      {/* Timer Controls */}

      <View style={styles.timerRow}>

        <TouchableOpacity
          style={styles.adjustButton}
          onPress={() => !running && setTime(time > 5 ? time - 5 : 0)}
        >
          <Text style={styles.adjustText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.timer}>{time}s</Text>

        <TouchableOpacity
          style={styles.adjustButton}
          onPress={() => !running && setTime(time + 5)}
        >
          <Text style={styles.adjustText}>+</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.calories}>
        Calories Burned: {calories}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=> setRunning(true)}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.reset}
        onPress={()=>{
          setRunning(false);
          setTime(30);
          setCalories(0);
        }}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#0f172a",
justifyContent:"center",
alignItems:"center"
},

title:{
color:"#fff",
fontSize:28,
marginBottom:40
},

timerRow:{
flexDirection:"row",
alignItems:"center"
},

timer:{
color:"#22c55e",
fontSize:60,
fontWeight:"bold",
marginHorizontal:20
},

adjustButton:{
backgroundColor:"#1e293b",
padding:15,
borderRadius:10
},

adjustText:{
color:"#fff",
fontSize:24
},

calories:{
color:"#94a3b8",
fontSize:18,
marginTop:15
},

button:{
backgroundColor:"#22c55e",
padding:15,
borderRadius:10,
marginTop:30,
width:150,
alignItems:"center"
},

reset:{
backgroundColor:"#ef4444",
padding:15,
borderRadius:10,
marginTop:15,
width:150,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold"
}

});
