import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import Product from '../Screen/Product';
import Login from '../Authogication/Login';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigation = () => {
//   <View>
//       <Tab.Navigator
//         initialRouteName="Home"
//         // tabBarOptions={{
//         //   activeTintColor: '#54ff9f',
//         // }}
//         screenOptions={{
//             tabBarShowLabel: true,
//             headerShown:false,
//             // tabBarStyle:{backgroundColor:'#5B8C2A'},
//             // tabBarInactiveTintColor:"#A9A9A9",
//             // tabBarInactiveBackgroundColor:'',
//             tabBarActiveTintColor:"#54ff9f",
//             // tabBarActiveBackgroundColor:'#5B8C29',
//             // tabBarHideOnKeyboard:true
    
//         }}
    
//         >
//           <Tab.Screen name="Home" component={HomeScreen}
//           options={{
//             tabBarLabel: "Home",
//             tabBarIcon:() => {
//                <HomeIcon name="home" size={26} color={"black"}/> 
//             }
//           }}/>
//           <Tab.Screen name="Search" component={Search} />
//           <Tab.Screen name="Favorites" component={Favorites} />
//           <Tab.Screen name="Profile" component={ProfileScreen} />
//         </Tab.Navigator>
//   </View>
// }

const StackNavigation = () => {
  return (
    <View>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
    </View>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})