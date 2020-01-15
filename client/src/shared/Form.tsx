import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from './Input'
import { FormProps } from '../utils/interfaces'
export const Form = (props: FormProps) => {
  const createFields = () => {
    let fields: any[] = []
    for (let key in props.formData) {
      fields.push(
        <Input
          key={key}
          value={props.formData[key]}
          onChangeText={text => props.handleChange(text, key)}
          label={key}
        />
      )
    }
    return fields.map(field => field)
  }
  return <View style={styles.formWrapper}>{createFields()}</View>
}

const styles = StyleSheet.create({
  formWrapper: {
    alignSelf: 'stretch'
  }
})
