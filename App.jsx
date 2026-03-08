import React, {useState} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
FlatList,
StyleSheet
} from 'react-native';

export default function App(){

const [task,setTask] = useState('');
const [taskList,setTaskList] = useState([]);

const addTask = () =>{
if(task === '') return;

setTaskList([
...taskList,
{id:Date.now().toString(), title:task, done:false}
]);

setTask('');
};

const deleteTask = (id) =>{
setTaskList(taskList.filter(item => item.id !== id));
};

const completeTask = (id) =>{
setTaskList(
taskList.map(item =>
item.id === id ? {...item, done:!item.done} : item
)
);
};

return(

<View style={styles.container}>

<Text style={styles.header}>  new one   first add   hello my Daily Activity  treking APP</Text>
<Text style={styles.header}>Daily Planner</Text>

<View style={styles.inputContainer}>

<TextInput
placeholder="Add your task..."
value={task}
onChangeText={setTask}
style={styles.input}
/>

<TouchableOpacity style={styles.addBtn} onPress={addTask}>
<Text style={styles.addText}>+</Text>
</TouchableOpacity>

</View>

<FlatList
data={taskList}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(

<View style={styles.taskCard}>

<TouchableOpacity
style={styles.taskLeft}
onPress={()=>completeTask(item.id)}
>

<Text style={[styles.taskText,item.done && styles.done]}>
{item.title}
</Text>

</TouchableOpacity>

<TouchableOpacity onPress={()=>deleteTask(item.id)}>
<Text style={styles.delete}>🗑</Text>
</TouchableOpacity>

</View>

)}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f7fb",
paddingTop:60,
paddingHorizontal:20
},

header:{
fontSize:32,
fontWeight:"bold",
marginBottom:20
},

inputContainer:{
flexDirection:"row",
marginBottom:20
},

input:{
flex:1,
backgroundColor:"#fff",
padding:15,
borderRadius:10,
fontSize:16,
elevation:3
},

addBtn:{
backgroundColor:"#4e7cff",
marginLeft:10,
borderRadius:10,
justifyContent:"center",
alignItems:"center",
paddingHorizontal:20
},

addText:{
fontSize:28,
color:"#fff",
fontWeight:"bold"
},

taskCard:{
backgroundColor:"#fff",
padding:18,
borderRadius:12,
marginBottom:12,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
elevation:2
},

taskLeft:{
flex:1
},

taskText:{
fontSize:18
},

done:{
textDecorationLine:"line-through",
color:"gray"
},

delete:{
fontSize:20
}

});