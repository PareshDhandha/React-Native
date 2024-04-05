import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

const Category = () => {
  const cateory = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "SmartPhone",
    },
    {
      id: 3,
      name: "HeadPhone",
    },
    {
      id: 4,
      name: "Laptop",
    },
    {
      id: 5,
      name: "SmartWatch",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.cateory}>
        <Text style={styles.text}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.seeall}>See all</Text>
        </TouchableOpacity>
      </View>
      {cateory.map((item) => (
        <View style={styles.chip}>
          <TouchableOpacity style = {{flexDirection:'row'}}>
            <Chip> {item.name} </Chip>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 140,
    padding: 20,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  cateory: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  seeall: {
    fontSize: 18,
    color: "#54ff9f",
    fontWeight: "500",
  },
  chip: {
    // flex:1,
    marginTop: 20,
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'flex-start',
    // width: 50,
    // padding: 3,
    borderRadius: 8,
  },
});
