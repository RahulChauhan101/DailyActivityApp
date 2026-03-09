import React, { useState, useEffect } from "react";
import {
View,
Text,
StyleSheet,
Image,
TextInput,
TouchableOpacity,
ScrollView
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ProfileScreen(){

const [height,setHeight] = useState("");
const [weight,setWeight] = useState("");
const [goal,setGoal] = useState("");
const [profession,setProfession] = useState("");

const [startDate,setStartDate] = useState(new Date());
const [showPicker,setShowPicker] = useState(false);
const [plan,setPlan] = useState("");

const professions = [
"Student",
"Businessman",
"Housewife",
"Sportsman",
"Athlete"
];

const plans = [
"Daily",
"Weekly",
"Monthly",
"3 Months",
"Yearly"
];

useEffect(()=>{
loadProfile();
},[]);

const calculateBMI = () => {

if(height && weight){

const h = height / 100;
const bmi = (weight / (h*h)).toFixed(1);

return bmi;

}

return "";

};

const saveProfile = async () => {

const data = {
height,
weight,
goal,
profession,
startDate,
plan
};

try{

await AsyncStorage.setItem("profile",JSON.stringify(data));

alert("Profile Saved Successfully");

}catch(error){
console.log(error);
}

};

const loadProfile = async () => {

try{

const data = await AsyncStorage.getItem("profile");

if(data !== null){

const profile = JSON.parse(data);

setHeight(profile.height);
setWeight(profile.weight);
setGoal(profile.goal);
setProfession(profile.profession);
setStartDate(new Date(profile.startDate));
setPlan(profile.plan);

}

}catch(error){
console.log(error);
}

};

return(

<View style={styles.container}>

<View style={styles.header}>

<Image
source={{uri:"https://i.pravatar.cc/500"}}
style={styles.avatar}
/>

<Text style={styles.name}>Rahul Chauhan</Text>

<Text style={styles.email}>
rahul.chauhan01@gmail.com
</Text>

</View>

<ScrollView contentContainerStyle={styles.scrollArea}>

<View style={styles.card}>
<Text style={styles.label}>Height (cm)</Text>

<TextInput
style={styles.input}
placeholder="Enter Height"
keyboardType="numeric"
placeholderTextColor="#94a3b8"
value={height}
onChangeText={setHeight}
/>
</View>

<View style={styles.card}>
<Text style={styles.label}>Weight (kg)</Text>

<TextInput
style={styles.input}
placeholder="Enter Weight"
keyboardType="numeric"
placeholderTextColor="#94a3b8"
value={weight}
onChangeText={setWeight}
/>
</View>

<View style={styles.card}>
<Text style={styles.label}>BMI</Text>

<Text style={styles.bmiText}>
{calculateBMI()}
</Text>
</View>

<View style={styles.card}>
<Text style={styles.label}>Fitness Goal</Text>

<TextInput
style={styles.input}
placeholder="Lose Fat / Gain Muscle"
placeholderTextColor="#94a3b8"
value={goal}
onChangeText={setGoal}
/>
</View>

<View style={styles.card}>
<Text style={styles.label}>Profession</Text>

{professions.map((item,index)=>(

<TouchableOpacity
key={index}
style={styles.radioRow}
onPress={()=>setProfession(item)}
>

<View style={styles.radioOuter}>
{profession === item && <View style={styles.radioInner}/>}
</View>

<Text style={styles.radioText}>{item}</Text>

</TouchableOpacity>

))}

</View>

<View style={styles.card}>

<Text style={styles.label}>Workout Start Date</Text>

<TouchableOpacity
style={styles.dateBtn}
onPress={()=>setShowPicker(true)}
>

<Text style={styles.dateText}>
{startDate.toDateString()}
</Text>

</TouchableOpacity>

{showPicker && (

<DateTimePicker
value={startDate}
mode="date"
display="default"
onChange={(event,selectedDate)=>{

setShowPicker(false);

if(selectedDate){
setStartDate(selectedDate);
}

}}
/>

)}

</View>

<View style={styles.card}>

<Text style={styles.label}>Workout Plan</Text>

{plans.map((item,index)=>(

<TouchableOpacity
key={index}
style={styles.radioRow}
onPress={()=>setPlan(item)}
>

<View style={styles.radioOuter}>
{plan === item && <View style={styles.radioInner}/>}
</View>

<Text style={styles.radioText}>{item}</Text>

</TouchableOpacity>

))}

</View>

<TouchableOpacity
style={styles.button}
onPress={saveProfile}
>

<Text style={styles.buttonText}>
Save Profile
</Text>

</TouchableOpacity>

</ScrollView>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#0f172a"
},

header:{
alignItems:"center",
paddingTop:40,
paddingBottom:20
},

avatar:{
width:120,
height:120,
borderRadius:60,
marginBottom:10
},

name:{
color:"#fff",
fontSize:22,
fontWeight:"bold"
},

email:{
color:"#94a3b8"
},

scrollArea:{
alignItems:"center",
paddingBottom:120
},

card:{
width:"90%",
backgroundColor:"#1e293b",
padding:18,
borderRadius:12,
marginBottom:12
},

label:{
color:"#94a3b8",
marginBottom:6
},

input:{
backgroundColor:"#0f172a",
borderColor:"#334155",
borderWidth:1,
borderRadius:8,
padding:10,
color:"#fff"
},

bmiText:{
color:"#22c55e",
fontSize:24,
fontWeight:"bold"
},

radioRow:{
flexDirection:"row",
alignItems:"center",
marginBottom:10
},

radioOuter:{
width:22,
height:22,
borderRadius:11,
borderWidth:2,
borderColor:"#22c55e",
alignItems:"center",
justifyContent:"center",
marginRight:10
},

radioInner:{
width:10,
height:10,
borderRadius:5,
backgroundColor:"#22c55e"
},

radioText:{
color:"#fff",
fontSize:15
},

dateBtn:{
backgroundColor:"#0f172a",
borderWidth:1,
borderColor:"#334155",
padding:12,
borderRadius:8
},

dateText:{
color:"#fff"
},

button:{
backgroundColor:"#22c55e",
padding:16,
borderRadius:12,
width:"90%",
alignItems:"center",
marginTop:10
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});