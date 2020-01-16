import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native'
import { Button, Input, Form } from '../../shared'
import { NavigationProps, SignInState } from '../../utils/interfaces'
import { LoginUser } from '../../services/AuthServices'
import { Danger } from '../../styles/Colors'

export default class SignIn extends Component<NavigationProps, SignInState> {
  state: SignInState = {
    username: '',
    password: '',
    isLoading: false,
    errorMessage: '',
    isFocused: false
  }

  componentDidUpdate() {
    LayoutAnimation.spring()
  }

  private handleChange = (text: string, label: string): void => {
    this.setState((state: SignInState) => {
      state[label] = text
      state.errorMessage = ''
      return state
    })
  }

  private handleSubmit = async () => {
    const { username, password } = this.state
    try {
      LoginUser({ username, password })
        .then(res => this.props.navigation.navigate('App'))
        .catch(err => {
          console.log(err)
          this.setState({
            errorMessage: 'Could Not Sign In',
            password: ''
          })
        })
    } catch (error) {
      console.log(error)
    }
  }

  setFocus = (focused: boolean) => this.setState({ isFocused: focused })

  render() {
    const { username, password, isFocused, errorMessage } = this.state
    return (
      <TouchableWithoutFeedback
        onPress={() => this.setFocus(false)}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Form
            isFocused={isFocused}
            formData={{ username, password }}
            handleChange={this.handleChange}
            setFocus={this.setFocus}
          />
          <Button
            error={errorMessage}
            style={
              errorMessage
                ? [styles.formButton, styles.error, styles.buttonError]
                : styles.formButton
            }
            title={errorMessage ? errorMessage : 'Sign In'}
            onPress={this.handleSubmit}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Dont have an account?</Text>
            <TouchableOpacity
              style={{ width: 100 }}
              onPress={() => this.props.navigation.navigate('register')}
            >
              <Text style={[styles.text, styles.anchor]}>Click Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333'
  },
  formButton: {
    marginTop: 20,
    marginHorizontal: 30
  },
  error: {
    color: Danger
  },
  buttonError: {
    borderColor: Danger,
    backgroundColor: Danger
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
