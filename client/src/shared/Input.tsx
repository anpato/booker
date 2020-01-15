import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Keyboard } from 'react-native'
import { TextInputProps } from '../utils/interfaces'
import { upperCaser } from '../utils/mutations'
import { Primary } from '../styles/Colors'

export const Input = (props: TextInputProps) => {
  const [isFocused, setFocus] = useState(false)
  return (
    <View style={styles.inputWrapper}>
      <Text
        style={
          isFocused ? [styles.label, styles.inputActiveLabel] : styles.label
        }
      >
        {upperCaser(props.label)}
      </Text>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onEndEditing={Keyboard.dismiss}
        style={isFocused ? [styles.input, styles.inputFocused] : styles.input}
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
    position: 'absolute'
  },
  inputActiveLabel: {
    color: Primary

    // transform: [-10]
  }
})
