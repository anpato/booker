export interface NavigationProps {
  navigation: any
}

export interface SignInState {
  username: string
  password: string
  isLoading: boolean
  errorMessage: string
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
