import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CardProps } from '../utils/interfaces'
import { GlobalStyles } from '../styles/GlobalStyle'
import { White, Primary, Danger } from '../styles/Colors'

export const Card = (props: CardProps) => (
  <View style={[styles.container, props.style]}>{props.children}</View>
)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: White,

    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  }
})
