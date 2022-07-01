import { ChipStyled } from './CustomChip.styles'

export const CustomChip = ({ label, color}) => {
  return (
    <ChipStyled
      color={color}
      label={label}
    />
  )
}