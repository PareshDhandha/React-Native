import { StyleSheet} from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'

const Paragraph = (props) => {
  return ( <Text style = {styles.text}>{...props}</Text>
  )
}

export default Paragraph

const styles = StyleSheet.create({ 
    text: {
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
    },
})