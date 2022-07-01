import { TextFieldStyled} from './CustomTextField.styles'

export const CustomTextField = ({ label }) => {
  return (
    <TextFieldStyled
      fullWidth
      label={label}
    />
  )
}