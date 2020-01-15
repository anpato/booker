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
        <Button style={styles.formButton} title="Sign In" />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Dont have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('register')}
          >
            <Text style={[styles.text, styles.anchor]}>Click Here</Text>
          </TouchableOpacity>
        </View>
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
  formButton: {
    marginTop: 20,
    marginHorizontal: 30
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 3
  },
  anchor: {
    color: '#22CE99'
  },
  textWrapper: {
    marginTop: 20,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginHorizontal: 40
  }
})
