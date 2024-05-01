import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../Authogication/Login'
import Registation from '../Authogication/Registration'

export default function ProfileScreen() {
  return (
    <View>
      <Login />
      {/* <Registation /> */}
    </View>
  )
}

const styles = StyleSheet.create({})