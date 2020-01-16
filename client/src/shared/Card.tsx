import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CardProps } from '../utils/interfaces'
import { GlobalStyles } from '../styles/GlobalStyle'
import { White, Primary, Danger } from '../styles/Colors'

export const Card = (props: CardProps) => (
  <View style={[styles.container, props.style]}>
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
            { color: props.appointmentCount > 0 ? Primary : Danger }
          ]}
        >
          {props.appointmentCount}
        </Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: White,
    padding: 40,
    marginHorizontal: 20,
    textAlign: 'left',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11
  },
  counterStyle: {
    fontSize: 32,
    marginHorizontal: 5
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
