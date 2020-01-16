import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RegisterState, NavigationProps } from '../../utils/interfaces'
import { Form, Button } from '../../shared'
import { RegisterUser } from '../../services/AuthServices'
export default class Register extends Component<
  NavigationProps,
  RegisterState
> {
  state: RegisterState = {
    name: '',
    email: '',
    username: '',
    password: '',
    isLoading: false,
    errorMessage: '',
    isFocused: false
  }

  handleChange = (text: string, label: string): void => {
    this.setState((state: RegisterState) => {
      state[label] = text
      return state
    })
  }

  handleSubmit = async () => {
    try {
      const { name, username, email, password } = this.state
      RegisterUser({ name, username, email, password }).then(res =>
        console.log(res)
      )
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { name, email, username, password } = this.state
    return (
      <View style={styles.container}>
        <Form
          formData={{ name, email, username, password }}
          handleChange={this.handleChange}
        />
        <Button
          title="Sign Up"
          style={styles.button}
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 40,
    marginVertical: 40
  }
})
