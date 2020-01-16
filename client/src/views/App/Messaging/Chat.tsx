import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../styles/GlobalStyle'
export default class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Chat</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: GlobalStyles.container
})
