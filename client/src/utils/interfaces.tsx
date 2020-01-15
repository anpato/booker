export interface NavigationProps {
  navigation: any
}

export interface SignInState {
  username: string
  password: string
  isLoading: boolean
  errorMessage: string
}

export interface ButtonProps {
  onPress?: any
  title?: string
  style?: any
  children?: any
}

export interface TextInputProps {
  onChangeText: any
  value: string
  label?: string
}

export interface FormProps {
  formData: object
  handleChange: any
}
