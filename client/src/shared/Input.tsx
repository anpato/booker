import React, { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Keyboard,
  Animated
} from 'react-native'
import { TextInputProps } from '../utils/interfaces'
import { upperCaser } from '../utils/mutations'
import { Primary } from '../styles/Colors'

export const Input = (props: TextInputProps) => {
  const [isFocused, setFocus] = useState(false)
  const [animatedValue] = useState(new Animated.Value(0))

  const handleBlur = () => {
    !props.value.length
      ? Animated.timing(animatedValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }).start()
      : setFocus(false)
  }

  const handleFocus = () => {
    Animated.timing(animatedValue, {
      toValue: -30,
      duration: 300,
      useNativeDriver: true
    }).start()
    setFocus(true)
  }
  return (
    <View style={styles.inputWrapper}>
      <Animated.Text
        style={
          (props.value && props.value.length) || isFocused
            ? [
                {
                  ...styles.label,
                  ...styles.inputActiveLabel,
                  transform: [{ translateY: animatedValue }]
                }
              ]
            : [styles.label, { transform: [{ translateY: animatedValue }] }]
        }
      >
        {props.label ? upperCaser(props.label) : null}
      </Animated.Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={props.placeholder}
        autoCompleteType="off"
        secureTextEntry={
          props.label && props.label.toLowerCase() === 'password' ? true : false
        }
        onEndEditing={Keyboard.dismiss}
        style={
          (props.value && props.value.length) || isFocused
            ? [styles.input, styles.inputFocused]
            : [styles.input]
        }
        onChangeText={text =>
          props.onChangeText(text, props.label.toLowerCase())
        }
        value={props.value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginVertical: 15
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    padding: 5,
    fontSize: 18,
    fontFamily: 'OpenSans-Regular'
  },
  inputFocused: {
    borderBottomColor: Primary
  },
  label: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    position: 'absolute',
    top: 10
  },
  inputActiveLabel: {
    color: Primary
  }
})
