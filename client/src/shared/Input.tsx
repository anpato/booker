import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { TextInputProps } from '../utils/interfaces'
import { upperCaser } from '../utils/mutations'

export const Input = (props: TextInputProps) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{upperCaser(props.label)}</Text>
      <TextInput
        style={styles.input}
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
    marginVertical: 5
    // borderWidth: 2,
    // borderColor: '#333'
    // flex: 1
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    padding: 5,
    fontSize: 18
  },
  label: {
    fontSize: 16
  }
})
