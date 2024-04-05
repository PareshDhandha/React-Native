import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cart from 'react-native-vector-icons/AntDesign';
import Banner from '../Component/Banner';
import Login from '../Authogication/Login'
import Registation from '../Authogication/Registration';
import { theme } from '../Core/theme';
import Category from '../Component/Category';
import Search from '../Component/Search';

const HomeScreen = () => {
  return (
    <View style = {{flex: 1}}>
    <View style = {styles.header}>
      <Text style = {styles.headertext}>Discover</Text>
      <Cart style = {styles.cart} name='shoppingcart' size={20} color={"black"}/>
    </View>
    {/* <Registation/> */}
    <Search />
    <Banner />
    <Category />
    {/* <Login /> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    header:{
        flexDirection:'row', 
        justifyContent:"space-between",
        padding:20,
    },
    headertext: {
      fontSize:30,
      fontWeight:'600',
    },
    cart: {
      borderWidth: 1,
      borderColor: "#fff",
      padding: 6,
      borderRadius: 50/2,
      backgroundColor: theme.colors.background
    }
})