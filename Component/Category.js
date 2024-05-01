import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Chip } from "react-native-paper";

const Category = () => {
  const [category, setCategory] = useState([]);
  const allCateory = [
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
  const getCategory =  () => {
     fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(json => setCategory(json))
    // console.log("category...", res);
    // setCategory(res);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.cateory}>
        <Text style={styles.text}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.seeall}>See all</Text>
        </TouchableOpacity>
      </View>
      {/* {
      Array.isArray(category) ?
      category.map((data,index) => {
        return (
          <View key={index} style = {styles.chipView}>
            <TouchableOpacity>
              <Chip>{data}</Chip>
            </TouchableOpacity>
          </View>
        );
      }):null
    } */}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={allCateory}
        renderItem={({ item }) => (
          <View style={styles.chip}>
            <TouchableOpacity>
              <Chip mode="outlined">{item.name}</Chip>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cateory: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'space-between'
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
    marginTop: 20,
    fontSize: 16,
    borderRadius: 8,
    // marginLeft:10
    marginRight:10
  },
  chipView: {
    display: 'flex',
    flexDirection:'row',
  }
});
