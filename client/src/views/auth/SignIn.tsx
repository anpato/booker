import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Input, Form } from '../../shared'
import { NavigationProps, SignInState } from '../../utils/interfaces'

export default class SignIn extends Component<NavigationProps, SignInState> {
  state: SignInState = {
    username: '',
    password: '',
    isLoading: false,
    errorMessage: ''
  }

  handleChange = (text: string, label: string): void => {
    this.setState((state: SignInState) => {
      state[label] = text
      return state
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <View style={styles.container}>
        <Form
          formData={{ username, password }}
          handleChange={this.handleChange}
        />
        <Button
          onPress={() => this.props.navigation.navigate('register')}
          title="Click Here"
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
  }
})
