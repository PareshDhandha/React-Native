import { StyleSheet} from 'react-native'
import React from 'react'
import { Button as Paperbutton} from 'react-native-paper'
import { theme } from '../Core/theme'

const Button = ({mode, style , ...props}) => {
  return (
    <Paperbutton 
        style = {[
            styles.button,
            mode === 'outlined' && {backgroundColor:theme.colors.surface},
            style,
        ]}
        labelStyle = {styles.text}
        mode = {mode}
        {...props}
    />
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
})