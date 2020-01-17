export interface NavigationProps {
  navigation: any
}

export interface SignInState {
  username: string
  password: string
  isLoading: boolean
  errorMessage: string
  isFocused: boolean
}

export interface RegisterState {
  name: string
  email: string
  username: string
  password: string
  isLoading: boolean
  errorMessage: string
  isFocused: boolean
}

export interface ButtonProps {
  onPress?: any
  title?: string
  style?: any
  children?: any
  error?: string
}

export interface CardProps {
  style?: any
  appointmentCount?: number
  children?: any
}

export interface TextInputProps {
  onChangeText?: any
  value?: string
  label?: string
  isFocused?: boolean
  setFocus?: any
  placeholder?: string
}

export interface FormProps {
  formData: object
  handleChange: any
  isFocused?: boolean
  setFocus?: any
}
