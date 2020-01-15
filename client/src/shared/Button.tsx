import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { GlobalStyles } from '../styles/GlobalStyle'
interface ButtonProps {
  onPress: any
  title: string
  style?: any
  children?: any
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
    >
      {props.children || (
        <Text style={[styles.buttonText, GlobalStyles.text]}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    padding: 10,
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 20
  },
  buttonText: {
    fontSize: 18
  }
})
