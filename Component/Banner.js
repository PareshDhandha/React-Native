import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import { SliderBox } from "react-native-image-slider-box";
// import {bigsale } from "../assets/bigsale.jpeg"

// const images = [
//    require({bigsale: _bigsale.bigsale}),
// //    require({ib}),
// //    require({wf}),
// //    require({mobile})

// ]

const Banner = () => {
  return (
    <View style = {styles.container}>
      {/* <SliderBox 
        images = {[
            require('bigsale.jpeg')
        ]}
      /> */}
      <Image source={require('./assets/bigsale.jpeg')} style = {styles.image}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width:'100%',
    maxWidth:340,
    maxHeight:250,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20,
    padding:20,
  }
})