import { TextFieldStyled} from './CustomTextField.styles'

export const CustomTextField = ({ label, value, onChange, name, error, type }) => {
  return (
    <TextFieldStyled
      fullWidth
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      error={error}
      type={type}
    />
  )
}