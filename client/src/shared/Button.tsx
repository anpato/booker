import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { GlobalStyles } from '../styles/GlobalStyle'
import { ButtonProps } from '../utils/interfaces'
import { Primary } from '../styles/Colors'

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
    >
      {props.children || (
        <Text
          style={
            props.error
              ? [styles.error, GlobalStyles.text, styles.buttonText]
              : [styles.buttonText, GlobalStyles.text, styles.buttonTextColor]
          }
        >
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
    borderColor: Primary,
    alignItems: 'center',
    borderRadius: 20
  },
  error: {
    color: '#f8f8f8'
  },
  buttonText: {
    fontSize: 18
  },
  buttonTextColor: {
    color: Primary
  }
})
