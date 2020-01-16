import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { clearToken } from '../../../services/TokenServices'
import { GlobalStyles } from '../../../styles/GlobalStyle'
export default class Messages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={clearToken}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: GlobalStyles.container
})
