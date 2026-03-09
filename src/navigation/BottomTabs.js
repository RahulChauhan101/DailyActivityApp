import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import ProgressScreen from "../screens/ProgressScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({

        headerShown:false,
        tabBarActiveTintColor:"#22c55e",
        tabBarInactiveTintColor:"#94a3b8",
        tabBarStyle:{backgroundColor:"#0f172a"},

        tabBarIcon:({color,size})=>{

          let iconName;

          if(route.name==="Home") iconName="home-outline";
          else if(route.name==="Workout") iconName="barbell-outline";
          else if(route.name==="Progress") iconName="stats-chart-outline";
          else if(route.name==="Profile") iconName="person-outline";
          else if(route.name==="WorkoutDetail") iconName="information-circle-outline";

          return <Icon name={iconName} size={24} color={color} />;

        }

      })}
    >

      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Workout" component={WorkoutScreen}/>
      <Tab.Screen name="Progress" component={ProgressScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
      <Tab.Screen name="WorkoutDetail" component={WorkoutDetailScreen}/>

    </Tab.Navigator>

  );

}