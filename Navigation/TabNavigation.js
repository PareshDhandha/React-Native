import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Screen/ProfileScreen";
// import StackNavigation from "./StackNavigation";
import Search from "../Screen/Search";
import Favorites from "../Screen/Favorites";
// import { NavigationContainer } from "@react-navigation/native"; 
import HomeIcon from 'react-native-vector-icons/AntDesign';
import HomeScreen from "../Screen/HomeScreen";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <View style = {{flex: 1}}> 
        <Tab.Navigator
        initialRouteName="Home"
        // tabBarOptions={{
        //   activeTintColor: '#54ff9f',
        // }}
        screenOptions={{
            tabBarShowLabel: true,
            headerShown:false,
            // tabBarStyle:{backgroundColor:'#5B8C2A'},
            // tabBarInactiveTintColor:"#A9A9A9",
            // tabBarInactiveBackgroundColor:'',
            tabBarActiveTintColor:"#54ff9f",
            // tabBarActiveBackgroundColor:'#5B8C29',
            // tabBarHideOnKeyboard:true
    
        }}
    
        >
          <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon:() => {
               <HomeIcon name="home" size={26} color={"black"}/> 
            }
          }}/>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
