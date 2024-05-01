import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Cart from "react-native-vector-icons/AntDesign";
import Banner from "../Component/Banner";
import Login from "../Authogication/Login";
import Registation from "../Authogication/Registration";
import { theme } from "../Core/theme";
import Category from "../Component/Category";
import Search from "../Component/Search";
import Product from "./Product";

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headertext}> Discover</Text>
          <Cart name="shoppingcart" style={styles.cart} size={20} />
        </View>
        <Search />
        <Banner />
        <Category />
        <Product />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  headertext: {
    fontSize: 20,
    fontWeight: "600",
  },
  cart: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 6,
    borderRadius: 50 / 2,
    backgroundColor: theme.colors.background,
  },
});
