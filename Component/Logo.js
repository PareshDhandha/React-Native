import { StyleSheet, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return ( <Image source={require('./assets/elogo.png')} style = {styles.image}/>
  )
}

export default Logo

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        marginBottom: 8,
    },
})