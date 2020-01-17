import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../styles/GlobalStyle'
import { Input } from '../../../shared'

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <Input placeholder="Search" />
        </View>
        <View style={styles.resultWrapper}>
          <Text>Locations Nearby</Text>
          {/* TODO:Insert Nearby Geocoded locations here */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: GlobalStyles.container,
  searchWrapper: {
    flex: 0.5
  },
  resultWrapper: {
    flex: 3
  }
})
