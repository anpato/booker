import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../styles/GlobalStyle'
import { Card } from '../../../shared'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card appointmentCount={0} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: GlobalStyles.container
})
