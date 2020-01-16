import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonProps } from '../utils/interfaces'

export const CreateMessage = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress}>{props.children}</TouchableOpacity>
)
