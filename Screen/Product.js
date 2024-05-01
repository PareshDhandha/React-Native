import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { theme } from "../Core/theme";
import Star from "react-native-vector-icons/AntDesign";
import Dollar from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useDispatch , useSelector} from "react-redux";
import ProductSlice from "../Redux/Slices/ProductSlice";


const Product = () => {
  const [product, setProduct] = useState([]);
  const navigation = useNavigation();
  const dispetch = useDispatch();
  const productData = useSelector((state) => state);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProduct(result))
      .then((json) => console.log(json.map((item) => item.price)));
      console.log('res...',productData)
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator = {false} pagingEnabled>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Array.isArray(product)
          ? product.map((data, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity onPress={() => navigation.navigate("SingleProduct")}>
                    <View style={styles.cardContainer}>
                      <View style={styles.cardImage}>
                        <Image
                          source={{uri:data.image}}
                          style={{ width: 110, height: 110 }}
                        />
                      </View>
                      <View style={styles.title}>
                        <Text
                          style={{
                            color: theme.colors.onSurfaceDisabled,
                            fontSize: 16,
                          }}
                        >
                          {data.title.slice(0, 9)}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Star
                            style={{ marginRight: 5 }}
                            name="star"
                            size={15}
                            color="yellow"
                          />
                          <Text style={{ fontSize: 15, fontWeight: "500" }}>
                            {data.rating.rate}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.price}>
                        <Dollar name="dollar" size={14} />
                        <Text style = {{fontSize:16, marginLeft:5}}>{data.price}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })
          : null}
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  cardContainer: {
    // padding:10,
  },
  cardImage: {
    margin: 10,
    marginLeft: 20,
    borderRadius: 14,
    backgroundColor: theme.colors.surface,
    padding: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // paddingLeft: 22,
  },
  price: {
    display:'flex',
    flexDirection: 'row',
    marginLeft:30,
    marginTop:5,
  }
});
