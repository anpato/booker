import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../styles/GlobalStyle'
export default class AppointmentHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Appointments</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: GlobalStyles.container
})
