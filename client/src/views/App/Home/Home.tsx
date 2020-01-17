import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../styles/GlobalStyle'
import { Card } from '../../../shared'
import { Primary, Danger } from '../../../styles/Colors'

export default class Home extends Component {
  render() {
    const appointmentCount = 0
    return (
      <View style={styles.container}>
        <Card appointmentCount={0} style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={[GlobalStyles.text, styles.cardText]}>You have</Text>
              <Text style={[GlobalStyles.text, styles.cardText]}>
                upcoming appointments
              </Text>
            </View>
            <View>
              <Text
                style={[
                  GlobalStyles.text,
                  styles.counterStyle,
                  { color: appointmentCount > 0 ? Primary : Danger }
                ]}
              >
                {0}
              </Text>
            </View>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: GlobalStyles.container,
  counterStyle: {
    fontSize: 32,
    marginHorizontal: 5
  },
  card: {
    padding: 40,
    marginHorizontal: 20,
    textAlign: 'left'
  },
  cardText: {
    fontSize: 22
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
