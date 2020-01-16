import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../styles/GlobalStyle'

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: GlobalStyles.container
})
