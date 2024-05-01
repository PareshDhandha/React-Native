import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import Product from '../Screen/Product';
import Login from '../Authogication/Login';
import SingleProduct from '../Screen/SingleProduct';
import TabNavigation from './TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Registation from '../Authogication/Registration';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <View>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name='Tab' component={TabNavigation} />
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name = "Registration" component={Registation}/>
      <Stack.Screen name = "SingleProduct" component={SingleProduct}/>
    </Stack.Navigator>
    </View>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})